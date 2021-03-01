const HomeController = require('./controllers/HomeController');
const UserController = require('./controllers/UserController');
const AdminController = require('./controllers/AdminController');

const checkRole = require('./middleware/checkRole').checkRole;
const isAuth = require('./middleware/isAuth').isAuth;

module.exports = function(app) {
    
    // app.post('/admin/DeleteUser', isAuth, checkRole(['admin', 'user']), AdminController.DeleteUser);

    app.post('/api/login', UserController.Login);

    app.get('/api/users', UserController.Users);
    app.get('/api/users/:id', UserController.User);
    app.post('/api/users', UserController.CreateUser);
    app.put('/api/users/:id', UserController.UpdateUser);

    app.get('/api/threads', ThreadController.Threads);
    app.post('/api/threads', ThreadController.CreateThread);
    app.put('/api/threads/:id', ThreadController.UpdateThread);
    app.delete('/api/threads/:id', ThreadController.DeleteThread);

    app.get('/api/boards', BoardController.Boards);
    app.post('/api/boards', BoardController.CreateBoard);
    app.put('/api/boards/:id', BoardController.UpdateBoard);
    app.delete('/api/boards/:id', BoardController.DeleteBoard);

    app.get('/api/posts', PostController.Posts);
    app.post('/api/posts', PostControllers.CreatePost);
    app.put('/api/posts/:id', PostControllers.UpdatePost);
    app.delete('/api/posts/:id', PostControllers.DeletePost);



}