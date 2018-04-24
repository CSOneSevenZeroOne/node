var express = require('express');
var router = express.Router();
router.get('/index', function(req, res) {
	res.send('index页面');
});
module.exports = router;