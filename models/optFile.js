var fs = require ('fs');

module.exports = {
    readFile: function (path, callback) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                callback && callback(data);
            }
        });
        console.log('completed the async function...');
    },
    readFileSync: function (path) {
        var data = fs.readFileSync (path, 'utf-8');
        console.log('oh, the sync function is over...');
        return data;
    },
    writeFile: function (path, data, callback) {
        fs.writeFile (path, data, function (err) {
            if (err) {
                throw err;
            } else {
                console.log('write file successfully...');
                callback && callback(data);
            }
        })
    }

};
  
