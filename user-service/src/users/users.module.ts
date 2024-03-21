import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/database/database.module";
import { UsersService } from "./users.service";
import { usersProviders } from "./users.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [
        UsersService,
        ...usersProviders
    ],
    exports: [UsersService]
})
export class UsersModule {}