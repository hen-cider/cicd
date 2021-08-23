const sum = require('./utils');

test('test 1', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
  
