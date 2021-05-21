import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    console.log(this)
    this.createCategoryService.execute({ name, description });
  
    return response.status(201).send();
  }
}

export { CreateCategoryController };