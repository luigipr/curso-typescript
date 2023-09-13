import Joi from "joi";
import { Music } from "protocols";
//import { Music } from "./../protocols/Music";

export const MusicSchema = Joi.object<Music>({
    title: Joi.string().required(),
    artist: Joi.string().required()
})