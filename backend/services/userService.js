const UserRepository = require('../repository/userRepository');


const userRepo = new UserRepository;

exports.save = async (data) => {
    return await userRepo.save(data)
}
