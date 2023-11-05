module.exports = {
  friendlyName: "Delete",

  description:
    "This API will delete the given employee record from employee table",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
  },

  exits: {
    exceptionError: {
      statusCode: 500,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    try {
      await Employee.destroyOne({ id: inputs.id });
      return exits.success({
        status: "success",
        message: "Employee record deleted successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while deleting employee records as: ${err.message}`,
      });
    }
  },
};
