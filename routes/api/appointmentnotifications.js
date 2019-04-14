// Waiting for front end...

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const AppointmentNotif = mongoose.model('AppointmentNotif'); 



/*

router.post('', (req, res) => { 

	insertAppointmentNotif(req,res);

});

*/

//CREATE APPOINTMENT NOTIFICATION FUNCTION

function insertAppointmentNotif(req,res){
	var appointmentNotif = new AppointmentNotif();
	appointmentNotif.targetReciever = req.body.targetReciever;
	appointmentNotif.notifText = req.body.notifText;
	appointmentNotif.appointmentName = req.body.appointmentName;
}

/*
router.get('', (req,res) => { 


});

*/

module.exports = router;