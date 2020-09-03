/* eslint-disable func-style */

const fs = require('fs');
const path = require('path');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const randScore = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const stream = csvWriter({
  headers: ['productid', 'uniqueid', 'username', 'date', 'head', 'body', 'stars', 'value', 'quality', 'appearance', 'expected', 'ease', 'helpful', 'unhelpful']
});

stream.pipe(fs.createWriteStream('./database/pg/pg_data_mc/data.csv'));

const generateOneRecord = (product, unique) => ([product, unique, faker.internet.userName(), faker.date.past(), faker.lorem.words(), faker.lorem.paragraphs(), randScore(), randScore(), randScore(), randScore(), randScore(), randScore(), Math.floor(Math.random() * 25), Math.floor(Math.random() * 25)]);

const writeData = (total) => {
  let i = 0;
  function writeToFile() {
    let ok = true;
    while (i < total && ok) {
      i++;
      for (let j = 0; j < 10; j++) {
        const record = generateOneRecord(i, i * 10 + j);
        if (i === total) {
          stream.write(record, 'utf-8', () => {
            stream.end();
          });
        } else {
          ok = stream.write(record, 'utf-8');
        }
      }
    }
    if (i < total) {
      stream.once('drain', writeToFile);
    }
  }
  writeToFile();
};

writeData(1000000);

