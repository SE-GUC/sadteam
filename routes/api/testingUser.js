const functions = require('./users');



//this test should fail
test('insert user should not be null', () => {
	expect(functions.post('user1')).toBeNull();

});