/**
 * Employee.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    empId: {
      columnName: "emp_id",
      type: "string",
      required: true,
      unique: true,
    },
    firstName: { columnName: "first_name", type: "string", required: true },
    lastName: { columnName: "last_name", type: "string", required: true },
    city: { columnName: "city", type: "string", required: true },
  },
};
