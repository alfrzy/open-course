const User = require('../models/user');

class UserRepository {

    async save(data) {
        const { id } = data

        const [user, created] = await User.findOrCreate({
            where: {
                id
            },
            defaults: data
        })
        if(!created) await user.update(data)

        return user.toJSON()
    }
}

module.exports = UserRepository
