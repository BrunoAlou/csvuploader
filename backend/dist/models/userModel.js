"use strict";
// userModel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor() {
        this.users = [
            { id: '1', name: 'John Doe', email: 'john@example.com' },
        ];
    }
    findByName(name) {
        return this.users.find(user => user.name === name);
    }
}
exports.UserModel = UserModel;
