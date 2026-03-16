import { Request, Response } from "express"
import prisma from "../db/prisma.js"
import { stat } from "node:fs"
import { Param } from "@prisma/client/runtime/client"

interface IParams {
    id: string
}



export const getArticles = async (req: Request, res: Response) => {
    try {
        const article = await prisma.article.findMany({
            where: { status: "PUBLISHED" },
            select: {
                id: true,
                title: true,
                subtitle: true,
                content: true,
                publishedAt: true,
                author: {
                    select: {
                        name: true,
                        image: true
                    }
                }
            },
            orderBy: { publishedAt: "desc" }
        })

        res.json(article)
    } catch(err) {
            console.error("cannot get all articles for public!", err)
            res.status(500).json({ message: 'Server error!' })
        }
}


export const getArticle = async (req: Request<IParams>, res: Response) => {
    try {
        const { id }: IParams = req.params
        
        const article = await prisma.article.findUnique({
            where: { id },
            include: {
                author: {
                    select: { name: true, image: true }
                }
            }
        })

        if(!article) {
            return res.status(404).json({ message: "Article not found" })
        }

        // Users can only see published articles
        if(article.status !== 'PUBLISHED' && !req.user) {
            return res.status(403).json({ message: 'Forbidden' })
        }

        res.json(article)
    } catch(err) {
        console.error("cannot get specific article!", err)
        res.status(500).json({ message: 'Server error!' })
    }
}

// Create
export const createArticle = async (req: Request, res: Response) => {
    try {
        const { title, subtitle, content, status, scheduleAt } = req.body

        const article = await prisma.article.create({
            data: {
                title,
                subtitle,
                content,
                status: status ?? "DRAFT",
                scheduledAt: scheduleAt ? new Date(scheduleAt) : null,
                publishedAt: status === "PUBLISHED" ? new Date() : null,
                authorId: req.user!.id
            }
        })

        res.status(400).json(article)
    } catch(err) {
        console.error("cannot create article!", err)
        res.status(500).json({ message: 'Server error!' })
    }
}

// Update
export const updateArticle = async (req: Request<IParams>, res: Response) => {
    try {

        const { id }: IParams = req.params
        const { title, subtitle, content, status, scheduleAt } = req.body
        const role = req.user!.role as string

        const article = await prisma.article.findUnique({
            where: { id }
        })

        if(!article) {
            return res.status(404).json({ message: "Article not found" })
        }

        // Writer — pwede lang i-edit ang sariling article
        if(role === 'writer' && article.authorId !== req.user!.id) {
            return res.status(403).json({ message: "Forbidden" })
        }

        const updated = await prisma.article.update({
            where: { id },
            data: {
                title,
                subtitle,
                content,
                status,
                scheduledAt: scheduleAt ? new Date(scheduleAt) : null,
                publishedAt: status === 'PUBLISHED' && !article.publishedAt ? new Date() : article.publishedAt
            }
        })

        res.json(updated)
    } catch(err) {
        console.error('cannot update article!', err)
        res.status(500).json({ message: 'Server error!' })
    }
}

// Delete
export const deleteArticle = async(req: Request<IParams>, res: Response) => {
   try {
    const { id }: IParams = req.params
    await prisma.article.delete({
        where: { id }
    })
    res.status(400).json({ message: 'Article deleted!' })
   } catch(err) {
    console.error('cannot delete article!', err)
    res.status(500).json({ message: 'Server error!' })
   } 
}

// get my articles for writer dashboard
export const getMyArticles = async (req: Request, res: Response) => {
    try {
        const articles = await prisma.article.findMany({
            where: { authorId: req.user!.id },
            orderBy: { createdAt: "desc" }
        })

        res.json(articles)
    } catch(err) {
        console.error('cannot get your articles!', err)
        res.status(500).json({ message: 'Server error!' })
    }
}