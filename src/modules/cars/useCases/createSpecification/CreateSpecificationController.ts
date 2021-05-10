import { Request, Response } from 'express'

import { ICreateSpecificationDTO } from '../../repositories/ISpecificaitonsRepository'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description }: ICreateSpecificationDTO = request.body
    this.createSpecificationUseCase.execute({ name, description })

    return response.status(201).send()
  }
}

export { CreateSpecificationController }
