const fs = require('fs');
const path = require('path');
const faker = require('faker');

const users = [];
const reviews = [];
const posts = [];

for (let i = 0; i < 10; i++) {
if(i<5){
  users.push({
    username: faker.name.findName(),
    email: faker.internet.email(),
    imageUrl: faker.image.avatar(),
    description: faker.hacker.phrase(),
    coverBackground:faker.random.image(),
    location: faker.address.country(),
    price: faker.commerce.price(10, 100)
  })  ;
}
reviews.push({
  rating:faker.commerce.price(1,5,0),
  text:faker.lorem.sentence(),
});
posts.push({
  title: faker.lorem.text(),
  videoUrl: "https://www.youtube.com/watch?v=Zg-89wuPfVc"
});
}

fs.writeFileSync(path.join(__dirname,'_data','User.json'), JSON.stringify(users))
fs.writeFileSync(path.join(__dirname,'_data','Review.json'), JSON.stringify(reviews))
fs.writeFileSync(path.join(__dirname,'_data','Post.json'), JSON.stringify(posts))