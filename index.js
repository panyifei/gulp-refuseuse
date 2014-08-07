'use strict'
var gutil=require('gulp-util');
var through=require('through2');
var refuseuse=require('refuseuse');

module.exports = function (task) {
    return through.obj(function (file, enc, cb) {
        // 主体实现忽略若干行
        if(file.isNull()){
            this.push(file);
            return cb();
        }

        if(file.isStream()){
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }

        refuseuse.refuseFunctionByNode(file.contents.toString(),task);

        this.push(file);
        cb;

    });
};