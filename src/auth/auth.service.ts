import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDTO, SingInDTO } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signup(data: SignUpDTO) {
    const UserAreadyExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (UserAreadyExists) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.prismaService.user.create({ data });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
  async signing(data: SingInDTO) {
    return 'signing';
  }
}
