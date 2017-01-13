var comb = require('comb');

// Configure logging appenders based on current environment.
var appenders = [
    {
        type: "ConsoleAppender"
    },
    {
        type: "RollingFileAppender",
        file: __dirname + "/../logs/picker.log"
    }
];

var logConf = {};
logConf['picker'] = {
    level: 'debug',
    appenders: appenders
};
comb.logger.configure(logConf);