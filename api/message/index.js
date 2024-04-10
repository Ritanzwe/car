const cars = require('./cars.json');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method==="GET"){
        context.res = {
            // status: 200, /* Defaults to 200 */
            add:"massambe",
            body: cars
        };
    }
    else{
        cars.push(req.body);
        context.res = {
            // status: 200, /* Defaults to 200 */
            add:"massambe",
            body: cars
        };
    }
    
}