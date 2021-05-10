import { Router } from 'express'

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryServicce'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

// Create Categories
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({ name, description })

  return response.status(201).send()
})

// List Categories
categoriesRoutes.get('/', (_request, response) => {
  const categories = categoriesRepository.list()

  return response.json(categories)
})

export { categoriesRoutes }
