const server = require("./src/app");
const { conn } = require("./src/db.js");
const createInformation = require("./src/controllers/createInformation");
const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  createInformation();
  server.listen(PORT, () => {
    console.log(`Server raised in port ${PORT}`); // eslint-disable-line no-console
  });
});