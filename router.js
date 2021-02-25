const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController');

module.exports = function(app) {
    app.get('/', HomeController.Index);
    
    app.get('/login', UserController.Index);
    app.get('/register', UserController.Register);
    app.post('/register/RegisterUser', UserController.RegisterUser);

}