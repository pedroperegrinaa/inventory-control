import { Router } from 'express'
import DrinkController from './controllers/DrinkController'

const routes = Router()

routes.get('/drinks/', DrinkController.index)
routes.post('/drinks/', DrinkController.store)
// routes.get('/drinks/:id', DrinksController.show)
// routes.put('/drinks/:id', DrinksController.update)
// routes.delete('/drinks/:id', DrinksController.destroy)

export default routes
