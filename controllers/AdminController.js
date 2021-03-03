// const jwt = require('jsonwebtoken');
// const User = require('../models/user');


// exports.Admin = async function(request, response) {
//     const users = await User.find();
//     return response.render('admin/index', { users: users, message: '', 'token': request.cookies.jwt  });
// }

// exports.ModifyUserPermissions = async function(request, response) {
//     const body = request.body;
//     const result = await User.updateOne({ username: body.user }, { role: body.role });

//     const users = await User.find();
//     if (result.ok == 1) {
//         return response.render('admin/index', { users: users, message: 'Successfully updated permissions', 'token': request.cookies.jwt  });
//     } else {
//         return response.render('admin/index', { users: users, message: 'Failed to modify permissions', 'token': request.cookies.jwt  });
//     }
// }

// exports.DeleteUser = async function(request, response) {
//     const body = request.body;
//     const result = await User.deleteOne({ username: body.user });
//     const users = await User.find();
//     if (result.ok == 1) {
//         return response.render('admin/index', { users: users, message: 'Successfully deleted user', 'token': request.cookies.jwt  });
//     } else {
//         return response.render('admin/index', { users: users, message: 'Failed to delete user', 'token': request.cookies.jwt  });
//     }
// }

