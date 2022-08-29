import { IsEmail, IsEnum, IsNumber, IsPhoneNumber, IsString, Matches, MATCHES, Min, MinLength } from 'class-validator';
import { Gender } from '@/enums/Gender.enum';

export class RegisterDto {
  @IsString()
  @MinLength(6)
  public username: string;

  @IsString()
  @IsPhoneNumber()
  public phoneNumber: string;

  @IsNumber()
  @Min(18)
  public age: number;

  @IsString()
  @IsEnum(Gender, { message: 'gender should be a male, female or other' })
  public gender: string;

  @IsEmail()
  public email: string;

  @IsString()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g, { message: 'password is to weak' })
  public password: string;

  @IsString()
  public passwordConfirm: string;
}
