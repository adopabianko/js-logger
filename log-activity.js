const fs = require('fs');
const moment = require('moment');
const mkdirp = require('mkdirp');

let path = './logs/' + moment().format('YYYY') + '/' + moment().format('MM'); // Directory logs
let filename = 'log_api_' + moment().format('DDMMYYYY') + '.log'; // Filename log

function createLog(dataLog) {
    if (fs.existsSync(path)) { // Pengecekan apakah folder sudah ada atau belum
        if (fs.existsSync(path + '/' +filename)) { // Pengecekan apakah file sudah ada atau belum
            updateFile(dataLog);
        } else {
            createFile(dataLog);
        }
    } else {
        mkdirp(path, (err) => {
            if (err) {
                console.log("Failed to create folder");
            } else {
                createFile(dataLog);
            }
        });
    }
}

/**
 * Create file log
 * @param array dataLog
 */
function createFile(dataLog) {
    let format_log = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ' + '[' + dataLog[0] + ']' + ' - ' + dataLog[1] + ' - ' + dataLog[2] + ' - ' + JSON.stringify(dataLog[3]) + ' - ' + JSON.stringify(dataLog[4]) + "\n";
    fs.writeFile(path + '/' + filename, format_log, (err) => {
        if (err) console.log(err);

        console.log("Successfully Written to File.");
    });
}

/**
 * Update file log
 * @param array dataLog
 */
function updateFile(dataLog) {
    let format_log = '[' + moment().format('YYYY-MM-DD HH:mm:ss') + '] ' + '[' + dataLog[0] + ']' + ' - ' + dataLog[1] + ' - ' + dataLog[2] + ' - ' + JSON.stringify(dataLog[3]) + ' - ' + JSON.stringify(dataLog[4]) + "\n";
    fs.appendFile(path + '/' + filename, format_log, (err) => {
        if (err) console.log(err);

        console.log("Successfully updated file");
    });
}

module.exports = {
    createLog
}