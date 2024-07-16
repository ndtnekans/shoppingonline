require('../utils/MongooseUtil');
const Models = require('./Models');

const CategoryDAO = {

  async selectAll() {
    const query = {};
    const categories = await Models.Category.find(query).exec();
    return categories;
  },
  //addnew
  async insert(category) {
    const mongoose = require('mongoose');
    category._id = new mongoose.Types.ObjectId();
    const result = await Models.Category.create(category);
    return result;
  },
  //update
  async update(category) {
    const newvalues = { name: category.name }
    const result = await Models.Category.findByIdAndUpdate(category._id, newvalues, { new: true });
    return result;
  },
  //delete
  async delete(_id) {
    const result = await Models.Category.findByIdAndDelete(_id);
    return result;
  },
  //seclect
  async selectByID(_id) {
    const category = await Models.Category.findById(_id).exec();
    return category;
  }
};
module.exports = CategoryDAO;