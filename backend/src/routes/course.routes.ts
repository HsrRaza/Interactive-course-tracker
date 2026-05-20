import { Router } from "express";

import { coursesController, getCourseBySlugController } from "../controllers/courses.controllers.js";

const router = Router();

router.get("/courses", coursesController);
router.get("/courses/:slug", getCourseBySlugController)

export default router;