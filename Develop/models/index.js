// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  foreignKey: ''
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: ''
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'producttag_product',
  foreignKey: ''
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'producttag_tag',
  foreignKey: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
