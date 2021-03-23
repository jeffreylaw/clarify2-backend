const UserController = require('./controllers/UserController');
const BoardController = require('./controllers/BoardController');
const ItemController = require('./controllers/ItemController');
const PostController = require('./controllers/PostController');
const CommentController = require('./controllers/CommentController');

const verifyToken = require('./middleware/verifyToken');
const verifyRole = require('./middleware/verifyRole');

// @ Removing verify token and verify roles until frontend is set up
module.exports = function(app) {
    
    app.post('/api/login', UserController.Login);

    app.get('/api/users', UserController.Users);
    app.get('/api/users/:id', UserController.User);
    app.post('/api/users', UserController.CreateUser);
    app.put('/api/users/:id', UserController.UpdateUser);
    app.delete('/api/users/:id', UserController.DeleteUser);
    
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
    app.post('/api/posts', PostController.CreatePost);
    app.put('/api/posts/:id', PostController.UpdatePost);
    app.delete('/api/posts/:id', PostController.DeletePost);

    app.get('/api/comments', CommentController.Comments);
    app.get('/api/comments/:id', CommentController.Comment);
    app.post('/api/comments', CommentController.CreateComment);
    app.put('/api/comments/:id', CommentController.UpdateComment);
    app.delete('/api/comments/:id', CommentController.DeleteComment);
}

// module.exports = function(app) {
//     app.post('/api/login', UserController.Login);

//     app.get('/api/users', UserController.Users);
//     app.get('/api/users/:id', UserController.User);
//     app.post('/api/users', UserController.CreateUser);
//     app.put('/api/users/:id', UserController.UpdateUser);
//     app.delete('/api/users/:id', UserController.DeleteUser);
    
//     app.get('/api/boards', BoardController.Boards);
//     app.post('/api/boards', verifyToken, verifyRole(['admin']), BoardController.CreateBoard);
//     app.put('/api/boards/:id', verifyToken, verifyRole(['admin', 'instructor']), BoardController.UpdateBoard);
//     app.delete('/api/boards/:id', verifyToken, verifyRole(['admin']), BoardController.DeleteBoard);

//     app.get('/api/items', ItemController.Items);
//     app.get('/api/items/:id', ItemController.Item);
//     app.post('/api/items', verifyToken, verifyRole(['admin', 'instructor']), ItemController.CreateItem);
//     app.put('/api/items/:id', verifyToken, verifyRole(['admin', 'instructor']), ItemController.UpdateItem);
//     app.delete('/api/items/:id', verifyToken, verifyRole(['admin', 'instructor']), ItemController.DeleteItem);

//     app.get('/api/posts', PostController.Posts);
//     app.post('/api/posts', PostController.CreatePost);
//     app.put('/api/posts/:id', verifyToken, PostController.UpdatePost);
//     app.delete('/api/posts/:id', verifyToken, PostController.DeletePost);

//     app.get('/api/comments', CommentController.Comments);
//     app.get('/api/comments/:id', CommentController.Comment);
//     app.post('/api/comments', verifyToken, CommentController.CreateComment);
//     app.put('/api/comments/:id', verifyToken, CommentController.UpdateComment);
//     app.delete('/api/comments/:id', verifyToken, CommentController.DeleteComment);
// }