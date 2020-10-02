// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
'use strict';
exports.handler = async (event, context) => {
  try {
    
      /*const requestBody = JSON.parse(event.body); */
      console.log(event);
      return {
        statusCode: 200,
        body: JSON.stringify({ message:"Hello" })

      }
    
  
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
