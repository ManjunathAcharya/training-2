const {describe, expect, test} = require('@jest/globals');
const fizBuz = require('./programming');

describe('fizbuzz',function(){
    test("should return fizz when divisible by 3",()=>{
        expect(fizBuz(3)).toBe('fizz');
    });
    test("should return buzz when divisible by 5",()=>{
        expect(fizBuz(5)).toBe('buzz');
    });
    test("should return fizbuzz when divisible by 5 and 3",()=>{
        expect(fizBuz(15)).toBe('fizz buzz');
    });
    test("should not return anything",()=>{
        expect(fizBuz(7)).toBe(7);
    });
})