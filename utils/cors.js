module.exports = (response) => {
    response.header('Access-Control-Allow-Origin', "*");
    response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

    return response
}