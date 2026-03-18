import { Request, Response, NextFunction } from "express";
import { redis } from "../config/redis.js";

export const cacheMiddleware = (keyPrefix: string, ttl: number = 300) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        // Build cache key based sa URL + query params
        const cacheKey = `${keyPrefix}:${req.url}`

        try {
            const cached = await redis.get(cacheKey)

            if (cached) {
                return res.status(200).json(JSON.parse(cached))
            }

            // Override res.json para ma-intercept at i-cache ang response
            const originalJson = res.json.bind(res)
            res.json = (body) => {
                // I-cache ang response
                redis.setex(cacheKey, ttl, JSON.stringify(body))
                return originalJson(body)
            }
            next()
        } catch(err) {
            next(err)
        }
    }
}

// Clear cache by prefix — gamitin after create/update/delete
export const clearCache = async (keyPrefix: string) => {
    const keys = await redis.keys(`${keyPrefix}:*`)
    if(keys.length > 0) {
        await redis.del(...keys)
    }
}