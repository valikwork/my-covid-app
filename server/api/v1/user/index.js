const { Router } = require('express');
const { emailConfirmationCtrl, getUserProfileDataCtrl } = require('./user.controller');
const router = Router()

router.get('/', (req, res) => {
    console.log('req.user in api/auth/v1/user', req.user);
    res.send(req.user)
})

router.get('/profile', getUserProfileDataCtrl)
router.get('/confirm', emailConfirmationCtrl)

module.exports = router;