import { userCollection } from "../data/db.js";
import userSchema from "../models/UserModel.js";

export default async function createUserValidate(req, res, next) {
  const { name, email, password } = req.body;
  const user = {
    name,
    email,
    password,
  };

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  const userExists = await userCollection.findOne({ email: user.email });

  if (userExists) return res.sendStatus(409);

  next();
}
