const uuid = require('uuid')
const usersDB = require('./usersdb')


/* ====>  TO /users  <==== */
const getAllUsers = () => usersDB

const createNewUser = (user) => {
    const newUser = {
        id: uuid.v4(),
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        birthday: user.birthday,
    }
    usersDB.push(newUser)
    return newUser
}
/* ====>  End controllers /users  <==== */

/* ====>  TO /user  <==== */

const getUserByUuid = (uuid) => {
    const user = usersDB.find(user => user.id === uuid)
    return user;
}
/* ====>  End controllers /user  <==== */

/* Encapsulation Controllers */
const Users = {
    getAll: getAllUsers,
    create: createNewUser
}

const User = {
    getByUuid: getUserByUuid,
}

//? Regular export
module.exports = {
    Users
    , User
}
