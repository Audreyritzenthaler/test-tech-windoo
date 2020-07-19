const faker = require('faker');
const fs = require('fs')

function generateIdeas() {

  let ideas = []

  for (let id=1; id <= 50; id++) {

    const N = 0.5
    let title = faker.lorem.sentences();
    let createdAt = faker.date.past(N, new Date());
    let first = faker.name.firstName();
    let last = faker.name.lastName();
    let name = `${first} ${last}`
    let score = faker.random.number(50);

    ideas.push({
        "id": id,
        "title": title,
        "createdAt": createdAt,
        "author": name,
        "score": score
    });
  }

  return ideas
}

let dataObj = generateIdeas();

module.exports = dataObj