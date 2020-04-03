module.exports = function(db) {
  console.log("testing getAllProducts");
  describe("it should be able to get all products and", () => {
    it("should should have function read_products", done => {
      expect(db.product.read_prodcut).toBeDefined();
      done();
    });
    it("should get all products without error", done => {
      db.product
        .read_product()
        .then(result => {
          expect(result).toEqual(jasmine.any(String));
          expect(false).toEqual(true);
          done();
        })
        .catch(err => {
          console.error(err);
          done(err);
        });
    });
  });
};
