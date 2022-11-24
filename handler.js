'use strict';

module.exports.hello = async (event) => {
  console.log(process.env.API_URL);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: process.env.API_URL
      },
      null,
      2
    ),
  };
};
