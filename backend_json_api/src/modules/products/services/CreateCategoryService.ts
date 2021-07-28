import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import Category from "../infra/typeorm/entities/Category";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute({ name }: IRequest): Promise<Category> {
    const normalizedName = name.toUpperCase().trim();
    const checkCategoryExists = await this.categoriesRepository.findByName({
      name: normalizedName,
    });
    if (checkCategoryExists) {
      throw new AppError("Category already exists.");
    }

    const category = await this.categoriesRepository.create({
      name: normalizedName,
    });

    return category;
  }
}

export default CreateCategoryService;
