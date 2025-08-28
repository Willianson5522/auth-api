import { Injectable } from '@nestjs/common';
import { SignUpDTO, SingInDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  async signup(data: SignUpDTO) {
    return 'signup';
  }
  async signing(data: SingInDTO) {
    return 'signing';
  }
}
