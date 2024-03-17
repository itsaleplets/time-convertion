const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });
 
 
  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });
 
 
  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
 
 
  it('Handles times after 30 mins - 10:34', () => {
    const timeInWords = convertTimeToWords('10:34');
    expect(timeInWords).toBe('twenty-six to eleven');
  });
 
 
  it('Handles times before 30 mins - 9:03', () => {
    const timeInWords = convertTimeToWords('9:03');
    expect(timeInWords).toBe('three past nine');
  });
 });
 
