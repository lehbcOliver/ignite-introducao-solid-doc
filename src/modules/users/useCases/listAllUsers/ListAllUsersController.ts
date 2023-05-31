import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;
      const user = this.listAllUsersUseCase.execute({ user_id });
      if (!user) {
        throw new Error("User does not exists");
      }
      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
