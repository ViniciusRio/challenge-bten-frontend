import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    // removed password params and the comparation '==='
    async validadeUser(email: string) {
        const user = await this.userService.getByEmail(email);

        if (user && user.email === email) {
            const {_id, email } = user;

            return { id: _id, email };
        }

        return null;

    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
