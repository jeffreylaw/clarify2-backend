

exports.Index = async function(request, response) {
    return response.render('home/index', { 'token': request.cookies.jwt });
}