module.exports = {
  messes: [
    "4th Floor Canteen",
    "Pixel Block",
    "MRD Block"
  ],

  items: [
    { name: "Lime Soda", price: 20, veg: true, category: "Drinks", mess: "4th Floor Canteen" },
    { name: "Masala Chai", price: 15, veg: true, category: "Drinks", mess: "Pixel Block" },

    { name: "Samosa", price: 12, veg: true, category: "Snacks", mess: "MRD Block" },
    { name: "Egg Puff", price: 25, veg: false, category: "Snacks", mess: "4th Floor Canteen" },

    { name: "Veg Pulao", price: 50, veg: true, category: "Meals", mess: "Pixel Block" },
    { name: "Curd Rice", price: 40, veg: true, category: "Meals", mess: "MRD Block" },
    { name: "Chicken Curry + Rice", price: 90, veg: false, category: "Meals", mess: "4th Floor Canteen" }
  ],

  specials: [
    { name: "Paneer Roll", price: 60, veg: true },
    { name: "Chicken Roll", price: 70, veg: false }
  ]
};
