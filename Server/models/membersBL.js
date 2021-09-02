const { resolve } = require('path/posix')
const MemberModel = require('./membersModel')

//GET ALL Members
const getAllMembers = () =>
{
    return new Promise((resolve,reject) =>
    {
        MemberModel.find({}, function(err,data)
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

//GET Member by ID
const getMember = (id) =>
{
    return new Promise((resolve,reject) => 
    {
        MemberModel.findById(id, function(err,data)
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

//POST a Member
const createMember = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let mem = new MemberModel({
            email : obj.email,
            city : obj.city
        })

        mem.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Created')
            }
        })
    })
}

//PUT a Member
const updateMember = (id,obj) =>
{
    return new Promise((resovle,reject) =>
    {
        MemberModel.findByIdAndUpdate(id,
            {
                email : obj.email,
                city : obj.city
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated')
                }
            })
    })
}

//DELETE a Member
const deleteMember = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        MemberModel.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted')
            }
        })
    })
}


module.exports = {getAllMembers, getMember, createMember, updateMember, deleteMember}