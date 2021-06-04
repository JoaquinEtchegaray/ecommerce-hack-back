const { OrderProduct, Order } = require("../models/index");

module.exports = {
  createOrder: async function (req, res) {
    try {
      let userId = req.body.user.userId;
      let cart = req.body.cart;
      let totalPrice = 0;
      //let products = [];
      for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
      }
      await Order.create({
        userId,
        status: 2,
        totalPrice,
      });
      res.json({ ok: true });
      //await OrderProduct.bulkCreate(products);
    } catch (err) {
      res.status(400).json({ err });
    }
  },
};
