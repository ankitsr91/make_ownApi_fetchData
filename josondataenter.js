const mongoose = require('mongoose');
const models = require('./src/model/schema');
const connectDb = require("./src/database/connection");
const productjson = require("./product.json");

const dataEnter = async () => {
    try {
        await connectDb();
        await models.create(productjson);
    } catch (error) {
        console.log('Error:', error);
    }
}

dataEnter();