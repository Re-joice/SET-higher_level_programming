#!/usr/bin/node
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data1) => {
  if (err) {
    return console.error(err);
  }

  fs.readFile(process.argv[3], 'utf8', (err, data2) => {
    if (err) {
      return console.error(err);
    }

    fs.writeFile(process.argv[4], data1 + data2, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
