module.exports = {
  friendlyName: "Fetch",

  description: "This API will fetch all employee record from employee table",

  inputs: {
    search: {
      type: "string",
    },
    sortColumn: {
      type: "string",
    },
    sortOrder: {
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
      let existingEmployees = inputs.search
        ? await Employee.find({
            or: [
              { empId: { contains: inputs.search } },
              { firstName: { contains: inputs.search } },
              { lastName: { contains: inputs.search } },
              { city: { contains: inputs.search } },
            ],
          }).sort(`${inputs.sortColumn} ${inputs.sortOrder}`)
        : await Employee.find().sort(
            `${inputs.sortColumn} ${inputs.sortOrder}`
          );
      return exits.success({
        status: "success",
        data: existingEmployees,
      });
    } catch (err) {
      sails.log.error(err);
      return exits.exceptionError({
        status: "error",
        message: `Error occured while fetching employee records as: ${err.message}`,
      });
    }
  },
};
