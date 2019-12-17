import { Router, Request, Response, NextFunction } from 'express';
import DictionaryService from '../../services/dictionary'


const route = Router();

export default (app: Router) => {
  app.use('/dictionaries', route);

  route.get(
    '/', 
    async (req: Request, res: Response, next: NextFunction ) => {
      try {
        let dictionaries = await DictionaryService.get()
        res.status(200).json({dictionaries})
      } catch(e) {
        res.status(e.status).json({message: e.message})
        return next(e);
      }
    }
  )

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
