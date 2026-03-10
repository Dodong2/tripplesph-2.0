import { Router } from "express";
import { auth } from "../lib/auth.js";
import { toNodeHandler } from "better-auth/node";

const router = Router()

router.all("/{*path}", toNodeHandler(auth))

export default router