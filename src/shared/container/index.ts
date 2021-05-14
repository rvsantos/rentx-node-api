import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificaitonsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificaitonsRepository'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)

// ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)
