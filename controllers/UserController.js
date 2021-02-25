exports.Index = async function(request, response) {
    response.render('login/index');
}

exports.Login = async function(request, response) {
    console.log(request);
    response.render('login/index');
}

exports.Register = async function(request, response) {
    response.render('register/index');
}

exports.RegisterUser = async function(request, response) {
    console.log('RegisterUser')
    console.log(request.body);
}