export const errorMessages = {
  accountAlreadyRegistered: {
    message: 'Account already registered',
    statusCode: 409,
  },
  accountNotFound: {
    message: 'Account not Found',
    statusCode: 404,
  },
  internalServerError: {
    message: 'Internal Server Error',
    statusCode: 500,
  },
  clientAlreadyRegistered: {
    message: 'client already registered',
    statusCode: 409,
  },
  // Add more error messages as needed
};

export const successMessages = {
  accountCreated: {
    message: 'Account created successfully',
    statusCode: 200,
  },
  // Add more success messages as needed
};
