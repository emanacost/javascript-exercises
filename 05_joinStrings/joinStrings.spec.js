const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Luigi', () => {
    expect(values.firstName).toEqual('Luigi');
  });
  test('lastName is Mario', () => {
    expect(values.lastName).toEqual('Mario');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1983', () => {
    expect(values.birthYear).toEqual(1983);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Luigi Mario and I am 42 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Luigi Mario', () => {
    expect(values.fullName).toEqual('Luigi Mario');
  });
  test('age is 42', () => {
    expect(values.age).toEqual(42);
  });
});
