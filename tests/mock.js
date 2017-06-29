import express from 'express';
import bodyParser from 'body-parser';

export default new Promise((resolve) => {
  const application = express();
    application
      .use(bodyParser.json())
      .get('/api/users/2', (req, res) => {
        res.json({
          "data": {
            id: 2,
            first_name: "lucille",
            last_name: "bluth",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
          }
        });
      })
      .post('/api/users', (req, res) => {
        res.status(201)
          .json({
            name: req.body.name,
            job: req.body.job,
            id: `${Math.floor(Math.random() * 1000)}`,
            age: Math.floor(Math.random() * 1000),
            createdAt: new Date(),
          });
      })
      .get('/header', (req, res) => {
        res.json(req.headers);
      })
    ;

  const listener = application.listen(3456, () => {
      resolve(listener);
    });
});
