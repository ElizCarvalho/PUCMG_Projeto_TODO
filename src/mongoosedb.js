const mongoose = require('mongoose');

const user = "admin";
const password = "123456abc";
const database = "todo_sample";
const serverName = "cluster0.i9uwr.mongodb.net"

module.exports = {
    init: () => {
        mongoose
            .connect(
                `mongodb+srv://${user}:${password}@${serverName}/${database}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                }
            )
            .then((res) => console.log(`Connection Succesful ${res}`))
            .catch((err) => console.log(`Error in DB connection ${err}`))
    },
};
