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
    let choise=[];
    if(payload.data.newMoon)
            choise.push(payload.data.newMoon);
    if(payload.data.whiteDays)
            choise.push(payload.data.whiteDays);
    if(payload.data.celebration)
            choise.push(payload.data.celebration);
    console.log(choise);
    callback(null,{
        statusCode:200,
        body:JSON.stringify({"name":name, "tel":tel,"choise":choise})
    });
}