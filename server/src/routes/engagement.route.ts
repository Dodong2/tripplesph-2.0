import { Router } from "express";
import { requireRole } from "../middleware/auth.middleware.js";
import { cacheMiddleware } from "../middleware/cache.middleware.js";
import { addReaction, removeReactions, addShare, addView } from "../controllers/engagement.controller.js";

const router = Router({ mergeParams: true })

router.post("/react", requireRole(['user']), addReaction)
router.delete("/react", requireRole(['user']), removeReactions)
router.post("/share", requireRole(['user']), addShare)
router.post("/view", requireRole(['user']), addView)

export default router