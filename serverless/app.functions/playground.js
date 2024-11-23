const axios = require('axios');

exports.main = async (context, sendResponse) => {
  
  try {
    sendResponse({body: "test axios", statusCode: 200});
  } catch (error) {
    sendResponse({ body: error.message, statusCode: 500});
  }

};



