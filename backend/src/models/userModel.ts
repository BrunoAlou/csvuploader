// userModel.ts

export interface User {
    id: string;
    name: string;
    email: string;
}

export class UserModel {
    private users: User[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com' },
    ];

    public findByName(name: string): User | undefined {
        return this.users.find(user => user.name === name);
    }
}
