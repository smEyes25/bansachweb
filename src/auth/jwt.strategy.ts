import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Constants } from 'commons/constants.common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Constants.JWT_SECRET.secret_key,
    });
  }

  async validate(payload: any) {
    return {
      user_id: payload.user_id,
      username: payload.username,
      role_ids: payload.role_ids,
    };
  }
}
