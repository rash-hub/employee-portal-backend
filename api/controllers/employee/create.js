module.exports = {
  friendlyName: "Create",

  description: "This API will create an employee record in employee table",

  inputs: {
    firstName: {
      required: true,
      type: "string",
    },
    lastName: {
      required: true,
      type: "string",
    },
    city: {
      required: true,
      type: "string",
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
      const payload = {
        ...inputs,
        empId: new Date().getTime(),
      };
      await Employee.create(payload);
      return exits.success({
        status: "success",
        message: "Employee record created successfully",
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while creating employee record as: ${err.message}`,
      });
    }
  },
};
