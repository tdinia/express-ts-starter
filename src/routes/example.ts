import express, { Request, Response, Router } from 'express';
import { exampleController } from '../controllers';

export const router: Router = express.Router({
  strict: true,
});

router.post('/', (req: Request, res: Response) => {
  exampleController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  exampleController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
  exampleController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
  exampleController.delete(req, res);
});
