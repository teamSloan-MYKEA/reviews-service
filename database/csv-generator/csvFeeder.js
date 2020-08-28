/* eslint-disable quotes */
/* eslint-disable func-style */
const fs = require('fs');
const faker = require('faker');
const { Pool } = require('pg');

const randScore = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const headers = `'productid','username','date','head','body','stars','value','quality','appearance','expected','ease','helpful','unhelpful'`;

const generateOneRecord = (index) => (`"${index}","${faker.internet.userName()}","${faker.date.past()}","${faker.lorem.words()}","${faker.lorem.paragraphs()}","${randScore()}","${randScore()}","${randScore()}","${randScore()}","${randScore()}","${randScore()}","${Math.floor(Math.random() * 25)}","${Math.floor(Math.random() * 25)}"`);

const generateTenMillionRecords = () => {
  const stream = fs.createWriteStream('records.csv');
  let i = 0;
  function writeToFile() {
    const ok = true;
    while (i < 10000000 && ok) {
      i++;
      const record = generateOneRecord(i);
      if (i === 10000000) {
        stream.write(record, () => {
          stream.end();
        });
      } else {
        stream.write(record);
      }
    }
  }
  stream.write(headers);
  writeToFile();
};

generateTenMillionRecords();