import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middlewares/validateSchema";
import { MusicSchema } from "../schemas/music.schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(MusicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;