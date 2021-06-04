const { OrderProduct, Order, Product, Status } = require("../models/index");

module.exports = {
  createOrder: async function (req, res) {
    try {
      console.log("hola");
      let { userId } = req.user;
      let { cart } = req.body;
      let totalPrice = 0;
      let products = [];
      for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
      }
      const order = await Order.create({
        userId,
        statusId: 2,
        totalPrice,
      });
      for (let i = 0; i < cart.length; i++) {
        let singleOrder = {
          productId: cart[i].id,
          orderId: order.id,
          productQuantity: cart[i].quantity,
          productPrice: cart[i].price,
        };
        products.push(singleOrder);
      }

      await OrderProduct.bulkCreate(products);
      res.json({ ok: true });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ err });
    }
  },

  index: async function (req, res) {
    try {
      const orders = await Order.findAll({
        include: [Product, Status],

        order: [["id", "ASC"]],
      });
      res.json(orders);
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  },
};
