import {
  IsString,
  IsEmail,
  MinLength,
  IsNumber,
  validate,
} from "class-validator";

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

export class UpdateUserDTO {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @MinLength(6)
  password?: string;
}

export class UserResponseDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  email: string;
}
