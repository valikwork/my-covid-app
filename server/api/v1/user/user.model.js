const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    email:{
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true
    },
    firstName:{
        type: String,
        trim: true,
    },
    lastName:{
        type: String,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    email_verified:{
        type: Boolean,
        default: false
    }
}, {
    collection: "users"
});

const inNewSymbol = Symbol("isNew")
UserSchema.pre("save", function (next) {
    if(this.isModified("password")){
        this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALT_ROUNDS));
    }
    this[inNewSymbol] = this.isNew;
    next();
})

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'vlkosp123@gmail.com',
//         pass: '9?&9X,kR,Eu=vHgK'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// UserSchema.post("save", (doc) => {
//     if(doc[inNewSymbol]){
//         // @TODO sendConfirmEmail
//         const token = jwt.sign({ id: doc._id }, process.env.JWT_SECRET);
//         const mailOptions = {
//             from: 'PhoneBook Authentification',
//             to: doc.email,
//             subject: 'Please, vefiry your account',
//             text: 'PhoneBook Authentification',
//             html: `Hi, please follow this <a href="http://localhost:3000/api/v1/user/confirm?email_conf_code=${token}">link<a> to confirm your email`
//         };
//         transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//         });
//     }
// })

const UserModel = model("UserModel", UserSchema)

module.exports = UserModel;