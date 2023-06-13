import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { FilterQuery } from 'mongoose';
import { UserReposotory } from './users.repository';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserReposotory) {}

  async getUserById(userId: string): Promise<User> {
    const filterObj: FilterQuery<User> = { _id: userId };
    return this.usersRepository.finOneUser(filterObj);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    username: string,
    national_code: number,
    date_of_bitrh: Date,
    total_toll_paid: number,
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
function uuidv4(): string {
  throw new Error('Function not implemented.');
}
