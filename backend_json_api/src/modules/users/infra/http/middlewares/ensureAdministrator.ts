import { NextFunction, Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import User from "@modules/users/infra/typeorm/entities/User";
import AppError from "@shared/errors/AppError";

export default async function ensureAdministrator(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const ormRepository: Repository<User> = getRepository(User);
  const userId = request.user.id;

  const user = await ormRepository.findOne({ where: { id: userId } });
  if (!user) {
    throw new AppError("Can't find this user");
  }

  if (!user.isAdministrator) {
    throw new AppError("This user isn't administrator");
  }

  return next();
}
