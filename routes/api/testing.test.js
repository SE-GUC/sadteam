const functions = require('./users');


//this test should fail
test('Insert user should not be null', () => {
	expect(functions.post()).toBeNull();
});


test('Post function has non-null argument', () => {
	expect(functions.post()).toBeCalledWith(expect.anything());
});