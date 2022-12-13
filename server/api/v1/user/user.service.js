const { compareSync } = require('bcrypt')
const UserModel = require("./user.model")

exports.compareUserPassword = async (email, password) => {
    const user = await UserModel.findOne({email}).select("_id password").lean().exec()
    if(!user){
        throw{
            code: 404,
            message: "You have entered an invalid email or password. Please try again."
        }
    }
    
    if(!compareSync(password, user.password)){
        throw{
            code: 404,
            message: "You have entered an invalid email or password. Please try again."
        }
    }

    return user;
}

exports.registerUser = async (email, password, firstName, lastName) => {
    try {
        return await UserModel.create({
            email, password, firstName, lastName
        });
    } catch (error) {
        if(error.code === 11000){
            throw {
                code: 409,
                message: "email already exists"
            }
        }
        throw error
    }
}

exports.getUserData = async (user_id) => {
    try {
        const user = await UserModel.findById(user_id).select(" -createdAt").lean().exec()
        if(!user){
            throw{
                code: 404,
                message: "user not found"
            }
        }

        return user;
    } catch (error) {
        throw error;
    }
}