const massive = require("massive");
require("dotenv").config();

describe("testing the database", () => {});

massive(process.env.DATABASE_URL, { rejectUnauthorized: false })
  .then(db => {
    describe("When server tries to start", () => {
      it("should be able to find the database", done => {
        expect(process.env.DATABASE_URL).toBeDefined(
          "The database connection string should be placed on environment variable DATABASE_URL"
        );
        expect(false).toBe(true);
        expect(db).toBeDefined();
        expect(db.product).toBeDefined();
        done();
      });
      let create = require("./create_product")(db);
      let update = require("./update_product")(db);
      let deleteO = require("./delete_product")(db);
      let getAll = require("./getAll_products")(db);
      let getOne = require("./getOne_product")(db);
      // db.end();
    });
  })
  .catch(console.error);
