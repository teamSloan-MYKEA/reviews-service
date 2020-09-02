/* eslint-disable quotes */
/* eslint-disable func-style */
// const fs = require('fs');
const faker = require('faker');

const randScore = () => {
  return Math.floor(Math.random() * 5) + 1;
};

// const headers = `'productid','reviews'`;

// const generateOneRecord = (index) => {
//   let obj = {
//     productid: index
//   };
//   let reviews = [];
//   for (let j = 0; j < 10; j++) {
//     let review = {
//       productid: index,
//       username: faker.internet.userName(),
//       date: faker.date.past(),
//       head: faker.lorem.words(),
//       body: faker.lorem.paragraphs(),
//       stars: randScore(),
//       value: randScore(),
//       quality: randScore(),
//       appearance: randScore(),
//       expected: randScore(),
//       ease: randScore(),
//       helpful: Math.floor(Math.random() * 25),
//       unhelpful: Math.floor(Math.random() * 25)
//     };
//     reviews.push(review);
//   }
//   obj['reviews'] = JSON.stringify(reviews);
//   console.log(obj.productid);
//   return (`"${obj.productid}","${obj.reviews}"\n`);
// };

// const generateTenMillionRecords = () => {
// const stream = fs.createWriteStream('./database/pg/pg_data/twoColumnRecords.csv');
// let i = 0;
// function writeToFile() {
//   let ok = true;
//   while (i < 1000000 && ok) {
//     i++;
//     const record = generateOneRecord(i);
//     if (i === 1000000) {
//       stream.write(record, 'utf-8', () => {
//         stream.end();
//       });
//     } else {
//       stream.write(record, 'utf-8');
//     }
//   }
// }
// // stream.write(headers);
// writeToFile();
// };

// generateTenMillionRecords();

const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');

const outpath = path.join(__dirname, 'data.csv');
if (fs.existsSync(outpath)) {
  fs.unlinkSync(outpath);
}

const stream = csvWriter({
  headers: ['productid', 'reviews']
});

stream.pipe(fs.createWriteStream('./database/pg/pg_data/twoColumnRecords.csv'));

const generateOneRecord = (index) => {
  let obj = {
    productid: index
  };
  let reviews = [];
  for (let j = 0; j < 10; j++) {
    let review = {
      productid: index,
      username: faker.internet.userName(),
      date: faker.date.past(),
      head: faker.lorem.words(),
      body: faker.lorem.paragraphs(),
      stars: randScore(),
      value: randScore(),
      quality: randScore(),
      appearance: randScore(),
      expected: randScore(),
      ease: randScore(),
      helpful: Math.floor(Math.random() * 25),
      unhelpful: Math.floor(Math.random() * 25)
    };
    reviews.push(review);
  }
  obj['reviews'] = JSON.stringify(reviews);
  console.log(obj.productid);
  return ([obj.productid, obj.reviews]);
};

const writeData = (total) => {
  let i = 0;
  function writeToFile() {
    let ok = true;
    while (i < total && ok) {
      i++;
      const record = generateOneRecord(i);
      if (i === total) {
        stream.write(record, 'utf-8', () => {
          stream.end();
        });
      } else {
        ok = stream.write(record, 'utf-8');
      }
    }
    if (i < total) {
      stream.once('drain', writeToFile);
    }
  }
  // stream.write(headers);
  writeToFile();
};

writeData(1000000);

