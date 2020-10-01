exports.handler = function(event, context, callback){
    // event obt contain infos about the request
    // context related to netlify specific information
    // callback for setup how return info the the caller the rst value will be a simple js obj callback(error,rslt)
 /*    let data = {
        name: "Abou Salmane",
        foo:[1,2,3,9],
        time: Date.nom()
    }; */
    let payload= JSON.parse(event.body).payload;
    console.log(payload);
    let name = payload.data.name;
    let tel=payload.data.tel;
    callback(null,{
        statusCode:200,
        body:JSON.stringify(name +" voici votre numero "+tel)
    });
}