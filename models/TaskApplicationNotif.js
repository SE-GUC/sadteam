
const mongoose = require('mongoose');


var TaskApplicationNotifSchema = new mongoose.Schema({
	targetUser: {
		type: String,
	},
	notifText: {
		type: String,
	},
	taskName: {
		type: String,
	}
});

mongoose.model('TaskApplicationNotif', TaskApplicationNotifSchema);




