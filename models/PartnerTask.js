// Partner Task Model

class PartnerTask {
	constructor(description, estimatedEffort, time, commitmentLevel, experienceLevel, requiredSkills){
		this.description = description;
		this.estimatedEffort =estimatedEffort;
		this.time = time;
		this.commitmentLevel = commitmentLevel;
		this.experienceLevel = experienceLevel;
		this.requiredSkills = requiredSkills;
	};
}

module.exports = PartnerTask