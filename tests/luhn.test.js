const luhn = require('../src/luhn');

test('valid number', () => {
    const result = luhn('3456786905690001');
    expect(result).toBe(true);
  });

test('Nonvalid number', () => {
    const result = luhn('4456000166551701');
    expect(result).toBe(false);
  });

test('shorter number', () => {
    const result = luhn('4456000');
    expect(result).toBe(false);
  });

  test('longer number', () => {
    const result = luhn('44560001665517014456000');
    expect(result).toBe(false);
  });