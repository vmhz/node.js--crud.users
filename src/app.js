const express = require('express');

const port = 8000

const app = express();
app.use(express.json());

/* ROUTES */
const usersRouters = require('./users/users.router')

app.use("/", usersRouters)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

