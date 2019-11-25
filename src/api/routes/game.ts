import { Router, Request, Response , NextFunction} from 'express';
import GameService from '../../services/game'
import validateInput from '../../validators/userInput'
const route = Router();

export default (app: Router) => {
  app.use('/games', route);

  route.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {

    const {dictionaryId} = req.body
    try {
      const gameTiles = GameService.buildGameTiles(4)
        const gameRecord = await GameService.create(dictionaryId, gameTiles)
        res.json(gameRecord)

      } catch (e) {
        console.log('error:', e);
        res.json({error: "something went wrong"})
        return next(e);
      }
    },
  );

  route.patch(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {

      const {id} = req.params
      const {selected} = req.body
      const { errors, isValid } = validateInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      try {
        let game = await GameService.findById(id)
        let userAnswer = GameService.parseUserData(selected, game.tiles)

        if(userAnswer) {
          let gameResult = GameService.compareUserAnswer(game.dictionary.words, userAnswer)

          res.json({result: gameResult})
        } else {
          res.json({result: "User input not valid"})
        }


      } catch (e) {
        console.log('error:', e);
        res.json({error: e})
        return next(e);
      }
    },
  );
};
