let doWorkPromise = function (err, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let now = require();
        resolve(`發生錯誤了 ${err} at ${now.toISOString()}`);
      }, timer);
    });
  };
  
const fs = require('fs');
fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('發生錯誤了', err);
  } else {
    console.log('成功讀到資料:', data);
  }
});