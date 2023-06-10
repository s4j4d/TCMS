import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { FilterQuery, Model } from 'mongoose';
import { UserReposotory } from './users.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserReposotory) {}

  async getUserById(userId: String): Promise<User> {
    return this.usersRepository.finOneUser(userId);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    username: String,
    national_code: Number,
    date_of_bitrh: Date,
    total_toll_paid: Number,
    ownerCar: any,
  ): Promise<User> {
    return this.usersRepository.create({
      _id: uuidv4(),
      username,
      national_code,
      date_of_bitrh,
      total_toll_paid,
      ownerCar,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
function uuidv4(): String {
  throw new Error('Function not implemented.');
}
