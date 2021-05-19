const models = require("./models");

const img = [
  "about-bg.jpm",
  "arrascaeta-757776.jpg",
  "contact-bg.jpg",
  "home-bg.jpg",
  "pan-semillas-473675.jpg",
  "post-bg.jpg",
  "post-sample-image.jpg",
  "758302.jpg",
];

const seeder = async () => {
  await models.sequelize.sync({ force: true }).then(() => console.log("done")); // SOLO PARA CREAR TABLA DESDE CERO y borra tablas viejas

  const users = [
    {
      firstName: "Claudio",
      lastName: "García",
      email: "claudio@garcia.com",
      address: "calamuchita 222",
      phone: 09983215,
      role: "costumer",
    },
    {
      firstName: "Daniel",
      lastName: "Araóz",
      email: "dani@araoz.com",
      address: "fierro 352",
      phone: 09523169,
      role: "costumer",
    },
    {
      firstName: "Laura",
      lastName: "Di Lorenzo",
      email: "laura@dilo.com",
      address: "termo 4455",
      phone: 094222557,
      role: "costumer",
    },
    {
      firstName: "Pedro",
      lastName: "Daltón",
      email: "pedro@dalton",
      address: "Bv Artigas 4478",
      phone: 099522741,
      role: "costumer",
    },
    {
      firstName: "Claudia",
      lastName: "Ortega",
      email: "claudia@ortega.com",
      address: "Zuñiga 2245",
      phone: 098556124,
      role: "costumer",
    },
    {
      firstName: "Agustina",
      lastName: "Soldano",
      email: "agus@solda.com",
      address: "Trabajo 2259",
      phone: 099888741,
      role: "costumer",
    },
    {
      firstName: "Matias",
      lastName: "Besozzi",
      email: "mati@beso.com",
      address: "maua 1232",
      phone: 099856231,
      role: "costumer",
    },
    {
      firstName: "Jimena",
      lastName: "Marquez",
      email: "jime@marquez",
      role: "admin",
    },
    {
      firstName: "Fito",
      lastName: "Paez",
      email: "fito@rosario.com",
      role: "admin",
    },
    {
      firstName: "Manuela",
      lastName: "Cejas",
      email: "manu@cejas",
      role: "admin",
    },
  ];
  const products = [
    {
      name: "Lightweight Jacket",
      description:
        "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-detail-01.jpg.pagespeed.ic.p3moSJxG7I.webp",
      price: "58.79",
      stock: "30",
      categoryId: "2",
      isActive: "true",
      slug: "jacket",
      isFeatured: true,
    },
    {
      name: "Women's Stretch Cotton Raglan Sleeve Tee",
      description:
        "Super soft cotton-rich fabric moves with you for all-day ease",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp",
      price: 21.03,
      stock: 50,
      categoryId: 1,
      isActive: "true",
      slug: "raglan",
      isFeatured: true,
    },
    {
      name: "Slim-Fit Long Sleeve Stretchy",
      description:
        "Simple Design! Breathable,Comfortable,Lightweight and pleasantly cool.Occasion: Perfect for business meeting, go to work, luncheon party or daily life",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp",
      price: 18,
      stock: 65,
      categoryId: 1,
      isActive: "false",
      slug: "stretchy",
      isFeatured: true,
    },
    {
      name: "COOFANDY Men's Casual Linen",
      description:
        "The chambray linen casual shirt, premium, business, plain casual solid color dress shirts.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp",
      price: 35,
      stock: 78,
      categoryId: 2,
      isActive: "false",
      slug: "linen",
      isFeatured: true,
    },
    {
      name: "NANJUN Women's Double Breasted Trench Coat",
      description:
        "This Slim-fit trench coat totally exceeds all your expectations. Classic style, good quality and fabric feels soft and comfortable.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp",
      price: 125,
      stock: 18,
      categoryId: 1,
      isActive: "false",
      slug: "coat",
      isFeatured: true,
    },
    {
      name: "Jumpsuits with Pockets",
      description:
        "Occasion: Beach, At Home, Vacation, Date Night, Shopping, Workout Yoga, suit for all occasions",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-05.jpg.pagespeed.ic.GHcB3Nc9zp.webp",
      price: 76,
      stock: 63,
      categoryId: 1,
      isActive: "true",
      slug: "jumpsuit",
      isFeatured: true,
    },
    {
      name: "Quartz Analog Strap Watch",
      description:
        "Indiglo light-up watch dial. To screw in, push the crown firmly against the threaded protrusion and hold in while turning the crown clockwise",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-06.jpg.pagespeed.ic.mU9c3gp9yp.webp",
      price: 53,
      stock: 200,
      categoryId: 5,
      isActive: "true",
      slug: "watch",
      isFeatured: true,
    },
    {
      name: "Utility Jacket",
      description:
        "Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-07.jpg.pagespeed.ic.wXz93SW1CF.webp",
      price: 33,
      stock: 46,
      categoryId: 1,
      isActive: "false",
      slug: "jacket",
      isFeatured: true,
    },
    {
      name: "T-Shirts Cotton Funny Grahpic Design",
      description:
        "Soft, stretchy and breathable fabric provides exceptional comfort and durability.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-08.jpg.pagespeed.ic.zcR_ZfXlFq.webp",
      price: 12,
      stock: 66,
      categoryId: 1,
      isActive: "false",
      slug: "funny",
      isFeatured: true,
    },
    {
      name: "Converse Unisex Chuck Taylor All Star",
      description:
        "Shaft measures approximately high-top from arch. Shoes availavble are in UK sizes. Refer size chart for US size conversion",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-09.jpg.pagespeed.ic._ex9y9IVR9.webp",
      price: 49,
      stock: 15,
      categoryId: 4,
      isActive: "true",
      slug: "converse",
      isFeatured: true,
    },
    {
      name: "Stretch Cotton Raglan Sleeve Tee",
      description:
        "Super soft cotton-rich fabric moves with you for all-day ease",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-10.jpg.pagespeed.ic.JKjq4oUn3E.webp",
      price: 6,
      stock: 53,
      categoryId: 1,
      isActive: "false",
      slug: "raglan",
      isFeatured: true,
    },
    {
      name: "Casual Linen Button Down Shirt",
      description:
        "HIGH-QUALITY MATERIAL --- Button down shirt lightweight, soft and comfortable, casual, skin-friendly, relaxed fit, perfectly suitable for all seasons.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp",
      price: 26,
      stock: 44,
      categoryId: 2,
      isActive: "true",
      slug: "linen",
      isFeatured: true,
    },
    {
      name: "Casual Leather Belt",
      description:
        "Adding a touch of style to your jeans or khakis is now a no-brainer. The belt strap features two rows of stitches on edges, a matte finish harness buckle and a pointed tip that finish off the classic silhouette of the belt.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-12.jpg.pagespeed.ic.Ft0-TDvq7W.webp",
      price: 15,
      stock: 32,
      categoryId: 2,
      isActive: "false",
      slug: "belt",
      isFeatured: true,
    },
    {
      name: "Short-Sleeve Crewneck T-Shirt",
      description:
        "Featuring a moisture-wicking tech stretch fabric that keeps you comfortable and dry",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-13.jpg.pagespeed.ic.jIjGx2QblE.webp",
      price: 20,
      stock: 62,
      categoryId: 1,
      isActive: "true",
      slug: "crewneck",
      isFeatured: true,
    },
    {
      name: "Loose Fit V Neck Top",
      description:
        "V Neck, Short Sleeve, Side Split, Solid color, Stripe Neckline/Cuff, Loose fit.",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-14.jpg.pagespeed.ic.rUWpWgkkYK.webp",
      price: 25,
      stock: 12,
      categoryId: 1,
      isActive: "false",
      slug: "vneck",
      isFeatured: true,
    },
    {
      name: "Silver watch",
      description:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-15.jpg.pagespeed.ic.LNG1pmoqOY.webp",
      image:
        "Stainless Steel Silver Round Shaped Slim Case - Milanese Mesh Band - Adjustable Fold Over Clasp Closure Ensures A Custom Fit",
      price: 150,
      stock: 22,
      categoryId: 5,
      isActive: "true",
      slug: "silver-watch",
      isFeatured: true,
    },
    {
      name: "Neck Back shirt",
      description:
        "Perfect to pair with jeans, skirts and shorts for vacation, beach, going out",
      image:
        "https://preview.colorlib.com/theme/cozastore/images/xproduct-16.jpg.pagespeed.ic.AbLwZITYaU.webp",
      price: 21,
      stock: 2,
      categoryId: 1,
      isActive: "false",
      slug: "neck-back",
      isFeatured: true,
    },
    {
      name: "Leather Bag",
      description:
        "With fashion design and great quality, this handbag will be the perfect gift for your wife, mom, girls, and family. What are you waiting for",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71pwqQVQyJL._AC_UY575_.jpg",
      price: 96,
      stock: 14,
      categoryId: 3,
      isActive: "true",
      slug: "leather-bag",
      isFeatured: true,
    },
    {
      name: "Laptop Tote Bag ",
      description:
        "Made of high quality canvas and pu leather ,top zipper closure,ultra light & scratch-resistant & waterproof and easy to clean.",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71ERPASeYUL._AC_UX569_.jpg",
      price: 30,
      stock: 15,
      categoryId: 3,
      isActive: "false",
      slug: "laptop-bag",
      isFeatured: true,
    },
    {
      name: "Fashion Sneakers",
      description:
        "Pure leather material with fabric looks more fashionable. Hand finished upper with good gloss, smooth touch.",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/612f9aYeCIL._AC_UY575_.jpg",
      price: 40,
      stock: 3,
      categoryId: 4,
      isActive: "true",
      slug: "sneakers",
      isFeatured: true,
    },
  ];
  const category = [
    {
      name: "Women",
    },
    {
      name: "Men",
    },
    {
      name: "Bag",
    },
    {
      name: "Shoes",
    },
    {
      name: "Watches",
    },
  ];

  const status = [
    { name: "paid" },
    { name: "unpaid" },
    { name: "delivered" },
    { name: "undelivered" },
  ];

  await models.User.bulkCreate(users);
  await models.Category.bulkCreate(category);

  await models.Product.bulkCreate(products);
  await models.Status.bulkCreate(status);
  console.log("[Database] Se corrió el seeder de Articles, Users y Comments.");
};

module.exports = seeder;

//se puede usar metodo BULK de sequelize
