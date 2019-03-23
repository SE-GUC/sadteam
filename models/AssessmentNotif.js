
const mongoose = require('mongoose');


var AssessmentNotifSchema = new mongoose.Schema({
	targetUser: {
		type: String,
	},
	notifText: {
		type: String,
	}
});

mongoose.model('AssessmentNotif', AssessmentNotifSchema);




