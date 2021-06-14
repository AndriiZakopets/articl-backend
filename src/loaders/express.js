import bodyParser from 'body-parser';
import * as MockDataService from '../services/MockDataService';

export default function ExpressLoader(app) {
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/api/articles', (req, res) => {
    res.json(MockDataService.getArticles());
  });

  app.get('/api/articles/:id', (req, res) => {
    const { params } = req;
    const article = MockDataService.getArticle(params.id);

    if (article) {
      res.json(article);
    } else {
      res.status(500);
      res.json({
        error: {
          message: `Article with id: ${params.id} not found`,
        },
      });
    }
  });
}
