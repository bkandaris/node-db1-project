const server = require('./server.js');
const accountsRouter = require('./data/accounts/accountsRouter');
const PORT = process.env.PORT || 4000;

server.use('/', accountsRouter);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
