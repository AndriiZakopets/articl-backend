import articleMock from '__mocks__/articleMock';
import userMock from '__mocks__/userMock';

function generateUsers(count = 20) {
  const arr = new Array(count).fill(0);
  return arr.map(userMock);
}

function generateArticles(users, count = 100) {
  const arr = new Array(count).fill(0);
  return arr.map((el, i) => {
    const user = users[i % users.length];
    return articleMock(user.id);
  });
}

const users = generateUsers();
const articles = generateArticles(users);

export function getArticles() {
  return articles;
}

export function getArticle(id) {
  return articles.find((article) => article.id === id);
}

export function getUser(id) {
  return users.find((user) => user.id === id);
}
