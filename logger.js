/**
 * Created by shichp on 2017/1/6.
 */
var log4js = require('log4js');
var logger;
try{
    log4js.configure("./log4js-config.json");
    logger = log4js.getLogger();
}catch(err){

}
var methods = ['trace','debug','info','warn','error','fatal'];
if(!logger ){
    logger = {};
    for(var i=0; i<methods.length; i++){
        logger[methods[i]] = defaultLog;
    }
}

function defaultLog(message){
    console.log(message);
}

exports.trace = logger.trace.bind(logger);

exports.debug = logger.debug.bind(logger);

exports.info = logger.info.bind(logger);

exports.warn = logger.warn.bind(logger);

exports.error = logger.error.bind(logger);

exports.fatal = logger.fatal.bind(logger);