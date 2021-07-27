import { getRepository, Repository, Raw } from "typeorm";

import ICreateCategoryDTO from "@modules/products/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/products/repositories/ICategoriesRepository";
import Category from "@modules/products/infra/typeorm/entities/Category";

class CategoryRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ name });
    await this.ormRepository.save(category);
    return category;
  }
}

export default CategoryRepository;
