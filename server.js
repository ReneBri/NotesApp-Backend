// must put dotenv config before anything else so that it is available globally
const dotenv = require('dotenv').config({path: './config.env'})

const app = require(`${__dirname}/app`);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Now listening on port ${port}!`)
});

