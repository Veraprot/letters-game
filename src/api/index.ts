import { Router } from 'express';
import dictionary from './routes/dictionary';
import game from './routes/game';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	dictionary(app);
	game(app);

	return app
}