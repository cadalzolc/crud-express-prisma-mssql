var express = require('express');
var router = express.Router();

var Default = require('../api/default');
var Doctors = require('../api/doctors');

router.get('/', Default.index);
router.get('/doctors', Doctors.list);
router.post('/doctors/create', Doctors.create);
router.post('/doctors/update/:id', Doctors.update_by_id);

module.exports = router;