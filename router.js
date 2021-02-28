const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController');
const AdminController = require('./controllers/AdminController');

module.exports = function(app) {
    app.get('/', HomeController.Index);
    
    app.get('/login', UserController.Login);
    app.post('/login/LoginUser', UserController.LoginUser);
    app.get('/register', UserController.Register);
    app.post('/register/RegisterUser', UserController.RegisterUser);
    app.get('/logout', UserController.Logout);
    app.get('/admin', AdminController.Admin);
    app.post('/admin/ModifyUser', AdminController.ModifyUserPermissions);
    app.post('/admin/DeleteUser', AdminController.DeleteUser);

}