import joi from "joi";

const userIdSchema = joi.object({
  user_: joi.string().min(3).required(),
});

export default userIdSchema;
