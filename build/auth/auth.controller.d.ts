import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCreadentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCreadentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
