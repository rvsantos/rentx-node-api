import { Router } from 'express'

import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

// Create Categories
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

// List Categories
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
})

export { categoriesRoutes }
