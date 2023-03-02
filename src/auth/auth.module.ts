import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Constants } from 'commons/constants.common';
import { AccountModule } from 'components/account/account.module';
import { AuthService } from 'auth/auth.service';
import { JwtStrategy } from 'auth/jwt.strategy';
import { LocalStrategy } from 'auth/local.strategy';

@Module({
  imports: [
    AccountModule,
    PassportModule,
    JwtModule.register({
      secret: Constants.JWT_SECRET.secret_key,
      signOptions: {
        expiresIn: Constants.JWT_SECRET.expires_in,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
