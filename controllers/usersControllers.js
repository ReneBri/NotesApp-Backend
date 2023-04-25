
const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/users.json`, 'utf-8'));

console.log(data);

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        message: 'success',
        users: data
    });
}

exports.createUser = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

// with ID parameter

exports.getSingleUser = (req, res) => {
    const id = req.params.id;

    const user = data.filter(usr => usr.userId === id);

    if (user.length === 0) {
        res.status(404).json({
            status: "fail",
            message: "user could not be found."
        });
    }

    res.status(200).json({
        status: "success",
        user
    });

}
