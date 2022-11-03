import { User } from "../../entity/User";
import { IServiceCradle } from "../../interface";

export class UserRepository {
    private readonly service: IServiceCradle;
    constructor(service: IServiceCradle) {
        this.service = service;
    }

    public FindAll(): Promise<User[]> {
        return Promise.resolve([])
    }

}