const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { json } = require('express');

const users = [];

for (let i = 0; i < 4; i++) {
users.push({
  username: faker.name.findName(),
  email: faker.internet.email(),
  imageUrl: faker.image.people(),
  coverBackground:faker.image.nature(),
  location: faker.address.city(),
  price: faker.commerce.price()
})  
}

fs.writeFileSync(path.join(__dirname,'_data','User.json'), JSON.stringify(users))