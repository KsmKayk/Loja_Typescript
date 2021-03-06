import { Router } from "express";
import usersRouter from "@modules/users/infra/http/routes/users.routes";
import sessionsRouter from "@modules/users/infra/http/routes/sessions.routes";
import categoriesRouter from "@modules/products/infra/http/routes/categories.routes";
const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/categories", categoriesRouter);
export default routes;
