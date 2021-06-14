import faker from 'faker';
import content from './exampleArticle';

function generateComment() {
  return {
    id: faker.datatype.uuid(),
    content: faker.lorem.sentence(),
    writeDate: faker.date.recent(),
    likesCount: faker.datatype.number({ min: 0, max: 50 }),
  };
}

export default function articleFactory(authorId) {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.sentence(),
    tags: new Array(5).fill(0).map(() => faker.lorem.word()),
    content,
    uploadDate: faker.date.recent().getTime(),
    comments: new Array(5).fill(0).map(generateComment),
    authorId,
  };
}
