module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    //calling/invoking sql seed
    dbInstance
      .create_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again" });
        console.log(err);
      });
  },
  getOne: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_product()
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again" });
        console.log(err);
      });
  },
  getAll: (req, res) => {
    //console.log('HIT')
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again" });
        console.log(err);
      });
  },
  update: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .update_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again" });
        console.log(err);
      });
  },
  delete: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .delete_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops I did it again" });
        console.log(err);
      });
  }
};
