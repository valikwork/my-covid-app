const { celebrate } = require("celebrate")
const { getUserData } = require("./user/user.service")

exports.validate = (schema, options = {}) => {
    return celebrate(schema, {...options, stripUnknown: { objects: true }})
}

exports.isAuthorized = async (req, res, next) => {
    console.log('req.session.user', req.session.user);
    if(!req.session.user){
        return next({
            code: 401,
            message: "unauthorized"
        })
    }

    req.user = await getUserData(req.session.user);
    next()
}