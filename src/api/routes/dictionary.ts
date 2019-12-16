import { Router, Request, Response, NextFunction } from 'express';
import DictionaryService from '../../services/dictionary'


const route = Router();

export default (app: Router) => {
  app.use('/dictionaries', route);

  route.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const dictionaryRecord = await DictionaryService.create()
        return res.status(201).json(dictionaryRecord)
      } catch (e) {
        res.json({error: e})
        return next(e);
      }
    },
  );
};
