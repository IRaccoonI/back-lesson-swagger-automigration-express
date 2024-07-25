import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  HttpCode,
} from "routing-controllers";
import { OpenAPI, ResponseSchema } from "routing-controllers-openapi";
import { Response } from "express";
import { UserResponseDTO, CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { userService } from "../services/user.service";

@JsonController("/users")
@OpenAPI({ security: [{ basicAuth: [] }] })
export class UserController {
  @Post("/")
  @ResponseSchema(UserResponseDTO)
  @HttpCode(201)
  async createUser(@Body() body: CreateUserDTO, @Res() res: Response) {
    const user = await userService.createUser(body);
    return res.json(user);
  }

  @Get("/")
  @ResponseSchema(UserResponseDTO, { isArray: true })
  async getAllUsers(@Res() res: Response) {
    const users = await userService.getAllUsers();
    return res.json(users);
  }

  @Get("/:id")
  @ResponseSchema(UserResponseDTO)
  async getUserById(@Param("id") id: number, @Res() res: Response) {
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).send();
    }
    return res.json(user);
  }

  @Put("/:id")
  @ResponseSchema(UserResponseDTO)
  async updateUser(
    @Param("id") id: number,
    @Body() body: UpdateUserDTO,
    @Res() res: Response
  ) {
    const user = await userService.updateUser(id, body);
    if (!user) {
      return res.status(404).send();
    }
    return res.json(user);
  }

  @Delete("/:id")
  @ResponseSchema(UserResponseDTO)
  async deleteUser(@Param("id") id: number, @Res() res: Response) {
    const user = await userService.deleteUser(id);
    if (!user) {
      return res.status(404).send();
    }
    return res.json(user);
  }
}
