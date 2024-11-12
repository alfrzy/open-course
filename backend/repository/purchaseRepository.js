const association = require("../models/association");
const Course = require("../models/course");
const Purchase = require("../models/purchase");
const User = require("../models/user");

class PurchaseRepository {
  // post
  async create({ user_id, course_id, invoice_number, total }) {
    const purchase = await Purchase.create({
      user_id,
      course_id,
      invoice_number,
      total
    });

    return purchase.toJSON();
  }

   // get all
   async getAll() {
    const purchases = await Purchase.findAll({
      include: [
        {
          model: Course,
          as: "Course", 
          attributes: ["name", "price"],
        },
        {
          model: User,
          as: "UserPurchase", 
          attributes: ["full_name", "gmail"],
        },
       
      ],
    });
    return purchases.map((purchase) => purchase.toJSON());
  }

// get by user id
  async getPurchasesByUserId(userId) {
  return Purchase.findAll({
    where: { user_id: userId },
    include: [
      {
        model: Course,
        as: "Course", 
        attributes: ["name", "price"], 
      }
    ]
  });
}
}

module.exports = PurchaseRepository;
