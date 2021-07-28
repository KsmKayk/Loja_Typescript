import { v4 as uuid } from "uuid";

import ICreateCategoryDTO from "@modules/products/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/products/repositories/ICategoriesRepository";
import Category from "@modules/products/infra/typeorm/entities/Category";

export default class FakeCategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  public async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();
    Object.assign(category, { id: uuid(), name });
    this.categories.push(category);
    return category;
  }

  public async findByName({
    name,
  }: ICreateCategoryDTO): Promise<Category | undefined> {
    const findCategory = this.categories.find(
      (category) => category.name === name
    );

    return findCategory;
  }
}
