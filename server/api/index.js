const { Router } = require('express');
const router = Router()

const VersionOne = require('./v1')

router.use("/v1", VersionOne)
router.use("/", VersionOne);
module.exports = router;