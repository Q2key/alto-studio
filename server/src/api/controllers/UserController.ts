import { IServiceCradle } from "../../interface";

export class UserController {
    readonly service: IServiceCradle;

    constructor(service: IServiceCradle) {
        this.service = service;
    }

    public async FindAll(req, res) {
        const users = await this.service.userRepository.FindAll();
        res.send(users);
    }
}