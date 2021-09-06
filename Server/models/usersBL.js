const UserModel = require('./usersModel');

//GET ALL Users
const getAllUsers = () =>
{
    return new Promise((resolve,reject) =>
    {
        UserModel.find({}, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

//GET User by ID
const getUser = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        UserModel.findById(id, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

module.exports = {getAllUsers, getUser}