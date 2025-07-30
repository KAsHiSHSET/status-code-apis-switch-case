const express = require('express');
const app = express();
const port = 3000;

app.get('/:apiName', (req, res) => {
  const { apiName } = req.params;
  let statusCode;
  let message;

  switch (apiName.toLowerCase()) {
    case 'api200':
      statusCode = 200;
      message = 'OK - Everything is working fine.';
      break;
    case 'api400':
      statusCode = 400;
      message = 'Bad Request - The server could not understand the request.';
      break;
    case 'api404':
      statusCode = 404;
      message = 'Not Found - The requested resource was not found.';
      break;
    case 'api500':
      statusCode = 500;
      message = 'Internal Server Error - Something went wrong on the server.';
      break;
    case 'api501':
      statusCode = 501;
      message = 'Not Implemented - This functionality is not available yet.';
      break;
    case 'api502':
      statusCode = 502;
      message = 'Bad Gateway - Invalid response from the upstream server.';
      break;
    case 'api503':
      statusCode = 503;
      message = 'Service Unavailable - Server is temporarily overloaded or down.';
      break;
    default:
      statusCode = 404;
      message = 'Invalid endpoint.';
  }

  res.status(statusCode).json({ status: statusCode, message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
