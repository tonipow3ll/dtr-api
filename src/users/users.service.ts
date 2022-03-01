import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../interfaces/users-interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find()
  }

  async findOne(id: string): Promise<IUser> {
    return await this.userModel.findOne({ _id: id });
  }

  async create(user: IUser): Promise<IUser> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}
