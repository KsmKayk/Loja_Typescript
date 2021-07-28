import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";
import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import ensureAdministrator from "@modules/users/infra/http/middlewares/ensureAdministrator";

const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdministrator,
  categoriesController.create
);

export default categoriesRouter;
