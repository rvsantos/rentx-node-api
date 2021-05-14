import { Router } from 'express'
import multer from 'multer'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

// Create Categories
categoriesRoutes.post('/', createCategoryController.handle)

// List Categories
categoriesRoutes.get('/', listCategoriesController.handle)

// Upload
categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
)

export { categoriesRoutes }
