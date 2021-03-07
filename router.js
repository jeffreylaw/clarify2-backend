const UserController = require('./controllers/UserController');
const BoardController = require('./controllers/BoardController');
const ItemController = require('./controllers/ItemController');
const PostController = require('./controllers/PostController');
const CommentController = require('./controllers/CommentController');

const checkRole = require('./middleware/checkRole').checkRole;
const isAuth = require('./middleware/isAuth').isAuth;

module.exports = function(app) {
    
    // app.post('/admin/DeleteUser', isAuth, checkRole(['admin', 'user']), AdminController.DeleteUser);

    app.post('/api/login', UserController.Login);

    app.get('/api/users', UserController.Users);
    app.get('/api/users/:id', UserController.User);
    app.post('/api/users', UserController.CreateUser);
    app.put('/api/users/:id', UserController.UpdateUser);
    
    app.get('/api/boards', BoardController.Boards);
    app.post('/api/boards', BoardController.CreateBoard);
    app.put('/api/boards/:id', BoardController.UpdateBoard);
    app.delete('/api/boards/:id', BoardController.DeleteBoard);

    app.get('/api/items', ItemController.Items);
    app.get('/api/items/:id', ItemController.Item);
    app.post('/api/items', ItemController.CreateItem);
    app.put('/api/items/:id', ItemController.UpdateItem);
    app.delete('/api/items/:id', ItemController.DeleteItem);

    app.get('/api/posts', PostController.Posts);
    app.post('/api/posts', PostControllers.CreatePost);
    app.put('/api/posts/:id', PostControllers.UpdatePost);
    app.delete('/api/posts/:id', PostControllers.DeletePost);

    app.get('/api/comments', CommentController.Comments);
    app.get('/api/comments/:id', CommentController.Comment);
    app.post('/api/comments', CommentController.CreateComment);
    app.put('/api/comments/:id', CommentController.UpdateComment);
    app.delete('/api/comments/:id', CommentController.DeleteComment);


}