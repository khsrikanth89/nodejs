var router = require('express').Router();
var express = require('express');
router.use(express.static(__dirname + '/../templates'));
router.use(express.static(__dirname + '/../assets'));

router.get('/', function (req, res) {
	res.sendfile('layouts/app.html')
});

module.exports = router;