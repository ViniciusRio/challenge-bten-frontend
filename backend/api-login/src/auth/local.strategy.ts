import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }
    // removed password params
    async validate(email: string): Promise<any> {
        const user = await this.authService.validadeUser(email);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;

    }


}