import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserReposotory {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async finOneUser(usersFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(usersFilterQuery);
  }

  // async findCarByColor(carFilterQuery: FilterQuery<User>): Promise<User>{
  //     return this.userModel.findCarByColor(carFilterQuery);

  async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery).exec();
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    usersFilterQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(usersFilterQuery, user);
  }
}
