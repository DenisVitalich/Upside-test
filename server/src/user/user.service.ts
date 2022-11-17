import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.create({ ...dto, listens: 0 });
    return user;
  }
  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }
  async getOne(id: ObjectId): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }
}
