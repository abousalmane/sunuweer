
      /* const qs = require("querystring"); */
exports.handler = async (event, context,callback) => {
  try {
    const pwd = event.queryStringParameters.pwd;
    console.log("Mot de Passe "+pwd);
  if(pwd=="Qamar@221"){
    callback(null, {
      statusCode: 200,
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message:"ok"}),
    });
  }
  else{
    callback(null, {
      statusCode: 403,
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"message": "Access Forbidden"}),
    });
  }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
