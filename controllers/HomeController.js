exports.Index = async function(request, response) {
    console.log(request.headers['authorization']);
    return response.render('home/index');
}