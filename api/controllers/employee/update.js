module.exports = {
  friendlyName: "Update",

  description:
    "This API will update the given employee record from employee table",

  inputs: {
    id: {
      type: "string",
      required: true,
    },
    firstName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    city: {
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
      let payload = {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        city: inputs.city,
      };
      await Employee.updateOne({ id: inputs.id }, payload);
      return exits.success({
        status: "success",
        message: "Employee record updated successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while updating employee records as: ${err.message}`,
      });
    }
  },
};
