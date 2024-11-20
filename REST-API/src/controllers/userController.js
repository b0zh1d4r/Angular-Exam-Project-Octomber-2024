import { Router } from 'express';
import userService from '../services/userService';

const userController = Router();

userController.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    const result = await userService.register(username, email, password);

    res.json(result );
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const result = await userService.login(email, password);

    res.json(result);
});

userController.get('/logout', async (req, res) => {
    await userService.logout();

    res.status(204).end();
});

export default userController;