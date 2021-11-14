import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    UserModule,
    MongooseModule.forRoot('mongodb+srv://db_user:db_pass@cluster0.wgh3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
