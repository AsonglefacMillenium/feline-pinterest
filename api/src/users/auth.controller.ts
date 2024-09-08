import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() body) {
    const { login, password } = body;
    return this.usersService.register(login, password);
  }

  @Post('login')
  async login(@Body() body) {
    const { login, password } = body;
    const user = await this.authService.validateUser(login, password);
    if (!user) {
      return { error: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}
