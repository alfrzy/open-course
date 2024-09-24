const UserRepository = require('../repository/userRepository');


const userRepo = new UserRepository;

// post
exports.save = async (data) => {
    return await userRepo.save(data)
}

// get
exports.findAll = async () => {
    return await userRepo.findAll(); 
};

// delete
exports.deleteById = async (id) => {
    return await userRepo.deleteById(id); 
};