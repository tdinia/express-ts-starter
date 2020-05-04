import express, { Request, Response, Router } from 'express';

export const router: Router = express.Router({
  strict: true,
});

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Express' });
});
