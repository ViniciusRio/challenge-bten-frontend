import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>
    ) {}


    async create(user: User) {
        const newUser = new this.userModel(user);
        console.log('service user', user)

        return await newUser.save();

    }

    async getById(id: string) {
        return await this.userModel.findById(id).exec();

    }

    async getAll() {
        return await this.userModel.find().exec();
    }

    async delete(id: string) {
        return await this.userModel.deleteOne({_id: id}).exec();
    }

    async deleteAll() {
        return await this.userModel.remove().exec();
    }
}
