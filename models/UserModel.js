const UserEntity = require('../entity/UserEntity')

class UserModel {

    findAll(){
        const users = UserEntity.findAll()
            .then(users => JSON.stringify(users))
            .catch(error => console.log(error))

        return users
    }

    create(user){
        const newUser = UserEntity.create(user)
            .then(user => user)
            .catch(error => console.log(error))

        return newUser
    }

}

module.exports = new UserModel