import { Body, Controller, Post } from '@nestjs/common';
import type { SignUpDTO, SingInDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    await this.authService.signup(body);

    return body;
  }

  @Post('signing')
  async signing(@Body() body: SingInDTO) {
    await this.authService.signing(body);

    return body;
  }
}
