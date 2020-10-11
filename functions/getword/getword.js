
      /* const qs = require("querystring"); */
exports.handler = async (event, context,callback) => {
  try {
    const pwd = event.queryStringParameters.pwd;
    console.log("Mot de Passe "+pwd);
    callback(null, {
      statusCode: 200,
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"message": "Hello"}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
    });
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
