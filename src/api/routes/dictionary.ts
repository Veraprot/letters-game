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
        res.json(dictionaryRecord)

      } catch (e) {
        console.log('error:', e);
        res.json({error: "something went wrong"})
        return next(e);
      }
    },
  );
};
