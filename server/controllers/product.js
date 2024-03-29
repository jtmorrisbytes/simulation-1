module.exports = {
  getOne: function (req, res) {
    req.app
      .get("db")
      .product.read_one(req.params.id)
      .then((result) => {
        if (result.length == 0) {
          res.status(404).json({ error: "product not found" });
        } else {
          res.json(result);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
  },
  getAll: function (req, res) {
    req.app
      .get("db")
      .product.read_all()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  create: function (req, res) {
    let { name, price, img } = req.body;
    req.app
      .get("db")
      .product.create_product(name, price, img)
      .then((data) => {
        if (data.length == 0) {
          res.status(500).json({ error: "create failed" });
        } else {
          res.json(data);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  update: function (req, res) {
    res.send(501);
  },
  delete: function (req, res) {
    if (!req.params.id) {
      res.status(400).json({ error: "missing id in request" });
    } else if (String(+req.params.id) === "NaN") {
      res.status(400).json({
        error: "param id was in an invalid format",
        id: req.params.id,
      });
    } else {
      req.app
        .get("db")
        .product.delete_product(req.params.id)
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          console.error(error);
          res.json(error);
        });
    }
  },
};
