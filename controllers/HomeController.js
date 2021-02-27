

exports.Index = async function(request, response) {
    console.log('/')
    console.log(request.cookies);
    return response.render('home/index', { 'token': request.cookies.jwt });
}