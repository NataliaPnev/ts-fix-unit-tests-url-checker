import {calculatePasswordStrength} from '../src/calculatePasswordStrength'

test('password is very weak', () => {
    const expectedResult: string = 'Very Weak';
    let actualResult = calculatePasswordStrength('Alisa');
    console.log(actualResult);
    expect(actualResult).toBe(expectedResult);
})

test('password is weak', () => {
    const expectedResult: string = 'Weak';
    let actualResult = calculatePasswordStrength('Alisa12');
    console.log(actualResult);
    expect(actualResult).toBe(expectedResult);
})

test('password is Moderate', () => {
    const expectedResult: string = 'Moderate';
    let actualResult = calculatePasswordStrength('AAlisa12');
    console.log(actualResult);
    expect(actualResult).toBe(expectedResult);
})

test('password is Strong', () => {
    const expectedResult: string = 'Strong';
    let actualResult = calculatePasswordStrength('AAlisa124567');
    console.log(actualResult);
    expect(actualResult).toBe(expectedResult);
})

