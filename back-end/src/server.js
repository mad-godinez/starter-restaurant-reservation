const app = require("./app");
const knex = require("./db/connection");

const PORT = process.env.PORT || 5000;

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });
  
knex.seed
  .run()
  .then((data) => {console.log("seeded", data);})
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
