import { userService } from "../services/userService.js";

async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await userService.create({ name, email, password });
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

async function signIn(req, res) {
  const { password, email } = req.body;

  try {
    const user = await userService.signIn({ email, password });
    res.status(200).send(user);
  } catch (err) {
    if (err.code === 404) return res.status(err.code).send(err.message);
    res.status(500).send(err.message);
  }
}

async function listUser(req, res) {
  try {
    const users = await userService.findAll();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function deleteUser(req, res) {
  const { user_id } = req.params;

  try {
    await userService.remove(user_id);
    res.sendStatus(200);
  } catch (err) {
    if (err.code === 404) return res.status(err.code).send(err.message);
    res.status(500).send(err.message);
  }
}

async function findUser(req, res) {
  const { user_id } = req.params;

  try {
    const user = await userService.find(user_id);
    res.status(200).send(user);
  } catch (err) {
    if (err.code === 404) return res.status(err.code).send(err.message);
    res.status(500).send(err.message);
  }
}

async function updateUser(req, res) {
  const { user_id } = req.params;
  const { name } = req.body;

  try {
    const user = await userService.update(user_id, name);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export { createUser, listUser, deleteUser, findUser, updateUser, signIn };
