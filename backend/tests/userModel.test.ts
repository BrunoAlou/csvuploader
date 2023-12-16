import { UserModel } from '../src/models/userModel';

describe('UserModel', () => {
    let userModel: UserModel;

    beforeAll(() => {
        userModel = new UserModel();
    });

    it('should find a user by name', () => {
        const user = userModel.findByName('John Doe');

        expect(user).toBeDefined();
        expect(user?.name).toBe('John Doe');
    });

});