const { Users, User } = require('./users.controllers')

/* ====>  TO /users  <==== */

const usersGetAll = (req, res) => {
    const data = Users.getAll()
    res.status(200).json(data)
}
const usersCreateOne = (req, res) => {
    const userInfo = req.body
    switch (true) {
        case (!userInfo.first_name):
        case (!userInfo.last_name):
        case (!userInfo.email):
        case (!userInfo.password):
        case (!userInfo.birthday):
            return (
                res.status(400).json({ message: 'Missing Data', req })
            )
    }

    const data = Users.create(userInfo)

    res.status(201).json(data)
}


/* ====>  TO /user  <==== */
const userGetByUuid = (req, res) => {
    const uuid = req.params.uuid
    const data = User.getByUuid(uuid)

    if (data)
        res.status(200).json(data)
    else
        res.status(404).json({ uuid: uuid, message: 'Invalid uuid' })

}

module.exports = {
    //? /users
    usersGetAll,
    usersCreateOne,
    //? /user
    userGetByUuid
}