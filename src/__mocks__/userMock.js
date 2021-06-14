import faker from 'faker';

export default function userFactory() {
  return {
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    name: faker.internet.userName(),
    avatarUrl: faker.internet.avatar(),
    joinDate: faker.date.past(),
    location: faker.address.city(),
  };
}
