import { Router } from 'express'
import DrinkController from './controllers/DrinkController'

const routes = Router()

routes.get('/drinks/', DrinkController.index)
routes.post('/drinks/', DrinkController.store)
// routes.get('/drinks/:id', DrinkController.show)
routes.put('/drinks/:id', DrinkController.update)
// routes.delete('/drinks/:id', DrinkController.destroy)

export default routes
