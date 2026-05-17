import { Router } from "express";

import { coursesController } from "../controllers/courses.controllers.js";

const router = Router();

router.get("/courses", coursesController);

export default router;