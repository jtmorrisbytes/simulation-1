module.exports = function testCreateProduct(db) {
  console.log("running tests for createProduct");
  describe("when the server tries to create a product", () => {
    it("should be able to query create a product", done => {
      console.log("testing create product query");
      expect(db.product).toBeDefined();
      done();
    });
  });
};
// describe("When server attemps to create a product", () => {
//   it("should have its functions on the product directory", done => {
//     expect(process.env.DATABASE_URL).toBeDefined(
//       "The database connection string should be placed on environment variable DATABASE_URL"
//     );
//     massive(
//       process.env.DATABASE_URL,
//       { rejectUnauthorized: false },
//       { noWarnings: true }
//     ).then(db => {
//       expect(db).toBeDefined(
//         "no database connection was returned... this test will fail"
//       );
//       expect(db.product).toBeDefined(
//         "the product db functions should be placed on the singular form 'product' directory"
//       );
//       expect(db.products).not.toBeDefined(
//         "Make sure to use the singular form 'product', not the plural form 'product'"
//       );
//       expect(db.product.create_product).toBeDefined(
//         "Maybe you forgot to add 'create_product.sql' to the 'db/product' directory?"
//       );
//       done();
//     });
//   });
//   it("should be successful, returning the result or nothing", done => {
//     massive(
//       process.env.DATABASE_URL,
//       { rejectUnauthorized: false },
//       { noWarnings: true }
//     ).then(db => {
//       let testcount = 10;
//       for (let i = 0; i < testcount; i++) {
//         let exampleProduct = {
//           name: "This is an example:" + Math.floor(Math.random() * 10),
//           price: Math.floor(Math.random() * 100),
//           img: `https://dummyimage.com/600x400/00${Math.ceil(
//             Math.random() * 9
//           )}/f${Math.ceil(Math.random() * 9)}f`
//         };

//         db.product
//           .create_product(
//             exampleProduct.name,
//             exampleProduct.price,
//             exampleProduct.img
//           )
//           .then(result => {
//             expect(result.length).toBeGreaterThan(
//               0,
//               "create_product should return data on success"
//             );
//             done();
//           })
//           .catch(done);
//       }
//     });
//   });
// });
