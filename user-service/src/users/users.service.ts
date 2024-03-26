import { Inject, Injectable } from "@nestjs/common";

import { USERS_REPOSITORY } from "src/constants";
import { User } from "../database/models/user.entity";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class UsersService
{
    constructor(
        @Inject(USERS_REPOSITORY)
        private readonly usersRepository: typeof User
    ) {}

    async save(name: string, username: string, email: string, password: string): Promise<User>
    {
        const user = new User();

        user.name = name;
        user.username = username;
        user.email = email;
        user.password = password;

        const userData = await user.save();

        return userData;
    }

    async findOne(username: string): Promise<UserDto | undefined>
    {
        const user: User = await this.usersRepository.findOne({ where: { username: username } });

        const userDto = new UserDto();

        userDto.name = user.name;
        userDto.username = user.username;

        return userDto;
    }
}