describe("Babysitter", () => {
	let babysitter;

	beforeEach(() => babysitter = new Babysitter);

	it("Should have wages preset", () => {
		expect(babysitter.wageTilBedtime).to.equal(12);
		expect(babysitter.wageAfterBedtimeTilMidnite).to.equal(8);
		expect(babysitter.wageAfterMidnight).to.equal(16);
	});

	it('Should define a start time', () => {
		babysitter.setStartTime(5);
		expect(babysitter.startTime).to.equal(5);
	});

	it('Should throw error if start time is less than 5', () => {
		expect(babysitter.setStartTime.bind(babysitter, 4)).to.throw('Cannot work befor 5:00pm');
	});

	it('Should define a bed time', () => {
		babysitter.setBedTime(9);
		expect(babysitter.bedTime).to.equal(9);
	});

	it('Should define end time', () => {
		babysitter.setEndTime(3);
		expect(babysitter.endTime).to.equal(3);
	})

	it('Should throw error if end time is greater than 4', () => {
		expect(babysitter.setEndTime.bind(babysitter, 5)).to.throw('Cannot work past 4:00 am');
	});

	it('Should calculate wages', () => {
		babysitter.setStartTime(5);
		babysitter.setBedTime(9);
		babysitter.setEndTime(4);

		expect(babysitter.calculateWage()).to.equal(136);

		babysitter.setStartTime(7);
		babysitter.setBedTime(11);
		babysitter.setEndTime(2);

		expect(babysitter.calculateWage()).to.equal(88);


		babysitter.setStartTime(8);
		babysitter.setBedTime(14);
		babysitter.setEndTime(4);

		expect(babysitter.calculateWage()).to.equal(112);
	});

});