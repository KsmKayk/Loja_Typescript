import AppError from "@shared/errors/AppError";

import FakeCategoriesRepository from "../repositories/fakes/FakeCategoriesRepositories";
import CreateCategoryService from "./CreateCategoryService";

let fakeCategoriesRepository: FakeCategoriesRepository;
let createCategory: CreateCategoryService;

describe("CreateCategory", () => {
  beforeEach(() => {
    fakeCategoriesRepository = new FakeCategoriesRepository();
    createCategory = new CreateCategoryService(fakeCategoriesRepository);
  });

  it("should be able to create a new category", async () => {
    const category = await createCategory.execute({ name: "Camisas" });

    expect(category).toHaveProperty("id");
  });
  it("should not be able to create a new category with same name", async () => {
    await createCategory.execute({ name: "Camisas" });
    await expect(
      createCategory.execute({ name: "Camisas" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
