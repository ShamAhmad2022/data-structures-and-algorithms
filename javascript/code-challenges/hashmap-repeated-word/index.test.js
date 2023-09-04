'use strict';

const repeatedWord= require('./index');


describe('find the repeated word function test', () => {

  it('check if the function works properly or not', ()=>{
    let string = 'this is not jackblack, this is Tom';
    let result = repeatedWord(string);

    expect(result).toEqual('this');
  });

  it('return a warning when the word did not found', ()=>{
    let string = 'this is not jackblack';
    let result = repeatedWord(string);

    expect(result).toEqual('No repeated words found');
  });

});
