const functions = require('./users');



test('Insert user should not be null', () => {
	expect(functions.post()).toBeNull();
});


test('Post function has non-null argument', () => {
	expect(functions.post()).toBeCalledWith(expect.anything());
});


test('User age should be greather than 8', () => {
  expect(functions.get().age).toBeGreaterThan(8);
});


test('User age should be less than 120', () => {
  expect(functions.get().age).toBeLessThan(120);
});

//waiting for partner subclass
/*
test('Partner to be instance of a user', () => {
  expect(functions.Partner()).toBeInstanceOf(functions.post());
});*/
