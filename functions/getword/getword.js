// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context,callback) => {
  try {
    const subject = event.queryStringParameters.name || 'World';
    console.log("new request");
    callback(null, {
      statusCode: 200,
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: "Hello"}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    });
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
