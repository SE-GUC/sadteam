
// -- This Schema would be used later when we work on the front end :)

const mongoose = require('mongoose');


var AppointmentNotifSchema = new mongoose.Schema({
	targetReciever: {
		type: String,
	},
	notifText: {
		type: String,
	},
	appointmentName: {
		type: String,
	}
});

mongoose.model('AppointmentNotif', AppointmentNotifSchema);
