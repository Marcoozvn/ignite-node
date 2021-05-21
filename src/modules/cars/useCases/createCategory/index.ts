import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryService } from "./CreateCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
console.log(categoriesRepository);
const createCategoryService = new CreateCategoryService(categoriesRepository);
console.log(CreateCategoryService)
const createCategoryController = new CreateCategoryController(createCategoryService);
console.log(createCategoryController)

export { createCategoryController, createCategoryService }