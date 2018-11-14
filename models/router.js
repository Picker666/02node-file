var optFile = require ('./optFile');

var readAndOut = function (path, response) {
    optFile.readFile(path, function (data) {
        console.log(data);
        response.write(data.toString());
        response.end('');
    });
}

module.exports = {
    login: function (response) {
        readAndOut('./file/login.exe', response);
    },
    register: function (response) {
        readAndOut('./file/register.exe', response);
    },
    writeFile: function (response) {
        var data = 'this is the content writeting on!!';
        optFile.writeFile('./file/writeFile.txt', data, function (content) {
            response.write(content);
            response.end('');
        });
    }
}
