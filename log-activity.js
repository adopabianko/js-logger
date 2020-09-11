"use strict";

const fs = require('fs');
const moment = require('moment');
const mkdirp = require('mkdirp');

global.path = 'logs/' + moment().format('YYYY') + '/' + moment().format('MM'); // Directory log
global.filename = 'log_api_' + moment().format('DDMMYYYY') + '.log'; // Filename log

exports.createLog = (dataLog) => {
    path = './logs/' + moment().format('YYYY') + '/' + moment().format('MM'); // Directory log
    filename = 'log_api_' + moment().format('DDMMYYYY') + '.log'; // Filename log

    if (fs.existsSync(path)) { // Pengecekan apakah folder sudah ada atau belum
        if (fs.existsSync(path + '/' +filename)) { // Pengecekan apakah file sudah ada atau belum
            updateFile(dataLog);
        } else {
            createFile(dataLog);
        }
    } else {
        mkdirp.sync(path);

        this.createLog(dataLog);
    }
}

/**
 * Create file log
 * @param array dataLog
 */
const createFile = (dataLog) => {
    let format_log = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + ']';

    for (let i = 0; i < dataLog.length; i++) {
        if (Object.getPrototypeOf(dataLog[i]) === Object.prototype) {
            dataLog[i] = JSON.stringify(dataLog[i]);
        }
        
        format_log += ' - ' + '[' + dataLog[i] + ']';
    }

    format_log += "\n";
    
    fs.writeFile(path + '/' + filename, format_log, (err) => {
        if (err) console.log(err);

        console.log("Successfully Written to File.");
    });
}

/**
 * Update file log
 * @param array dataLog
 */
const updateFile = (dataLog) => {
    let format_log = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + ']';

    for (let i = 0; i < dataLog.length; i++) {
        if (Object.getPrototypeOf(dataLog[i]) === Object.prototype) {
            dataLog[i] = JSON.stringify(dataLog[i]);
        }

        format_log += ' - ' + '[' + dataLog[i] + ']';
    }

    format_log += "\n";

    fs.appendFile(path + '/' + filename, format_log, (err) => {
        if (err) console.log(err);

        console.log("Successfully updated file");
    });
}