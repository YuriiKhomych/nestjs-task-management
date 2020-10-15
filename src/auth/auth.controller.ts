import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCreadentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCreadentialsDto);
    }
    @Post('/signin')
    signIn(@Body(ValidationPipe) authCreadentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCreadentialsDto);
    }
}
