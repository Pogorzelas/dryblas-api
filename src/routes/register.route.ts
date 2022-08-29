import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { RegisterDto } from '@dtos/register.dto';

class RegisterRoute implements Routes {
  public path = '/register';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(RegisterDto, 'body'), (req, res) => {
      const password = req.body.password;
      const confirmPassword = req.body.passwordConfirm;

      if (password !== confirmPassword) {
        res.status(400);
        return res.send({
          message: 'passwords doesnt match',
        });
      }

      res.status(200);
      return res.send('ok');
    });
  }
}

export default RegisterRoute;
