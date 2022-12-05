import { Request, Response } from 'express'
import { InvalidParamError } from '../errors'

import { badRequest } from '../helpers/http-helper'

import Drink from '../schemas/Drink'

class DrinkController {
  public async index (req: Request, res: Response): Promise<Response> {
    const drinks = await Drink.find()

    return res.json(drinks)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    if (!req.body) {
      return res.json(badRequest(new InvalidParamError('Body não pode estar vazio')))
    }

    try {
      const drink = await Drink.create(req.body)

      return res.json(drink)
    } catch (error) {
      return res.json(badRequest(new InvalidParamError(error.message)))
    }
  }

  // public async show (req: Request, res: Response): Promise<Response> {
  //   if (!req.params.id) {
  //     return res.json(badRequest(new InvalidParamError('Id não indrinkado')))
  //   }

  //   try {
  //     let drink
  //     if (!(drink = await Drink.findById(req.params.id))) {
  //       return res.json(badRequest(new InvalidParamError('Drink não encontrado')))
  //     }

  //     return res.json(drink)
  //   } catch (error) {
  //     return res.json(badRequest(new InvalidParamError(error.message)))
  //   }
  // }

  // public async update (req: Request, res: Response): Promise<Response> {
  //   if (!req.params.id) {
  //     return res.json(badRequest(new InvalidParamError('Id não indrinkado')))
  //   }

  //   if (!req.body) {
  //     return res.json(badRequest(new InvalidParamError('Body não pode estar vazio')))
  //   }

  //   try {
  //     let drink
  //     if (!(drink = await Drink.findById(req.params.id))) {
  //       return res.json(badRequest(new InvalidParamError('Drink não encontrado')))
  //     }

  //     drink = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true })

  //     return res.json(drink)
  //   } catch (error) {
  //     return res.json(badRequest(new InvalidParamError(error.message)))
  //   }
  // }

  // public async destroy (req: Request, res: Response): Promise<Response> {
  //   if (!req.params.id) {
  //     return res.json(badRequest(new InvalidParamError('Id não indrinkado')))
  //   }

  //   try {
  //     let drink
  //     if (!(drink = await Drink.findById(req.params.id))) {
  //       return res.json(badRequest(new InvalidParamError('Drink não encontrado')))
  //     }

  //     await Drink.findByIdAndDelete(req.params.id)

  //     return res.send()
  //   } catch (error) {
  //     return res.json(badRequest(new InvalidParamError(error.message)))
  //   }
  // }
}

export default new DrinkController()
