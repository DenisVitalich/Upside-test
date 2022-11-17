import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.bp3c9lq.mongodb.net/upside-test?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
})
export class AppModule {}
