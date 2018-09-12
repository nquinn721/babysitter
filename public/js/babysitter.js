class Babysitter{

	constructor(){
		this.wageTilBedtime = 12;
		this.wageAfterBedtimeTilMidnite = 8;
		this.wageAfterMidnight = 16;
	}

	setStartTime(time){
		this.startTime = Math.floor(time);

		if(this.startTime < 5)throw 'Cannot work befor 5:00pm';
	}

	setBedTime(time){
		this.bedTime = Math.ceil(time);
	}

	setEndTime(time){
		this.endTime = Math.ceil(time);


		if(this.endTime > 4)throw 'Cannot work past 4:00 am';
	}


	calculateWage(){
		let total = 0;

		total += 16 * this.endTime;

		total +=  12 * ((this.bedTime < 12 ? this.bedTime : 12) - this.startTime);

		if(this.bedTime < 12)total += (8 * (12 - this.bedTime));

		return total;
	}
}