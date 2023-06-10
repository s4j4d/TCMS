import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { ObjectId } from 'mongoose';

import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class Car {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  id: ObjectId[];

  @Prop({ defult: 'small' })
  type?: String;

  @Prop({})
  color: String;

  @Prop()
  length: Number;

  @Prop()
  load_valume: Number;
}

@Schema({})
export class User {
  @Prop()
  _id: String;

  @Prop({
    trim: true,
    index: true,
    unique: true,
    required: true,
  })
  username: String;

  @Prop({
    required: true,
  })
  national_code: Number;

  @Prop({ require: true })
  date_of_bitrh: Date;

  @Prop({
    require: false,
  })
  total_toll_paid: Number;

  @Prop({
    type: 'Car',
    sparse: true,
  })
  ownerCar?: Car;
}

export const UserSchema = SchemaFactory.createForClass(User);
