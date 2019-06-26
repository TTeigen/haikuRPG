import { syllablesInWord } from './../src/backend-code';

describe ('SyllableTest', function(){

  it('should return syllables in word', function(){
    expect(syllablesInWord('word')).toEqual(3);
  })

  it('should return syllables in word', function(){
    expect(syllablesInWord('word')).toEqual(3); 
  })


})
