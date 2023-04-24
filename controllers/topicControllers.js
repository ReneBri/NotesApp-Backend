
const fs = require('fs');

// fetch data from local dev-data folder
const data = fs.readFileSync('./dev-data/topics.json', 'utf-8', (err, data) => {
    if(err){
        console.log(err.message);
    }
    return data;
});

const jsonData = JSON.parse(data);

// all topic handlers for '/'
exports.getAllTopics =  (req, res) => {
    res.status(200).json({
        status: 'success',
        data: jsonData
    });
};

exports.createTopic = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        status: 'success',
        data: req.body
    });
};