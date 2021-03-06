"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const config = require("./config");
dotenv.config({ silent: true });
const app = express();
process.env.PWD = process.cwd();
console.log('PWD', process.env.PWD);
app.set('trust proxy', true);
// app.use(compress());
// app.use(helmet());
// app.use(processRequest);
app.enable('etag');
app.use(express.static(process.env.PWD + '/www/', {
    etag: true
}));
// app.use(pageNotFound);
// bind the app to listen for connections on a specified port
app.listen(config.PORT, function () {
    // Render some console log output
    console.log('Listening on port ' + config.PORT);
});
