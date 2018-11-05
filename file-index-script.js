const fs = require('fs');
const path = require('path');
function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, function (err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);

      fs.stat(file, function (err, stat) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          // if (RegExp('\.html$').test(file)) {
          //     results.push(file);
          // }

          filewalker(file, function (err, res) {
            console.log(res);
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (RegExp('\.html$').test(file)) {
            results.push(file.replace(/\\/g, '//') + '/');
          }

          if (!--pending) done(null, results);
        }
      });
    });
  });
};

filewalker('./src/app', function (err, results) {
  if(!err){
    let x = `var htmls = '${results.join(',')}'`;
    fs.writeFile('./src/assets/file-index.js', x);
  }
})
