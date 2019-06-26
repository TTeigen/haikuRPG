import { syllablesInWord, countVowels, countDiphthongs, countSilentVowels} from './../src/backend-code';


describe ('SyllableTest', function(){

  // it('should return syllables in word', function(){
  //   expect(syllablesInWord('word')).toEqual(3);
  // });
  //
  // // it('should return syllables in word the second', function(){
  // //   expect(syllablesInWord('word')).toEqual(2);
  // // })
  //
  // it('should return # of vowels in a word', function(){
  //   expect(countVowels("Trevor")).toEqual(2);
  // });
  //
  // it('should return # of vowels in a word2', function(){
  //   expect(countVowels("TrEvor")).toEqual(2);
  // });
  // // it('should return the number of diphthongs', function(){
  // //   expect(countDiphthongs("house")).toEqual(1);
  // // })
  // //
  // // it('should return the number of diphthongs', function(){
  // //   expect(countDiphthongs("roundhouse")).toEqual(2);
  // // })
  // it('should return the number of diphthongs', function(){
  //   expect(countDiphthongs("boat")).toEqual(1);
  // });
  //
  // it('should return the number of diphthongs', function(){
  //   expect(countDiphthongs("year")).toEqual(1);
  // });
  //
  // it('should return the number of silent vowels1', function(){
  //   expect(countSilentVowels("house")).toEqual(1);
  // });
  //
  // it('should return the number of silent vowels2', function(){
  //   expect(countSilentVowels("neat")).toEqual(0);
  // });
  //
  // it('should return the number of silent vowels3', function(){
  //   expect(countSilentVowels("le")).toEqual(0);
  // });
  it('return syllables in a word 1', function(){
    expect(syllablesInWord("house")).toEqual(1);
  });

  it('return syllables in a word 2', function(){
    expect(syllablesInWord("peanut")).toEqual(2);
  });

  it('return syllables in a word 3', function(){
    expect(syllablesInWord("Trever")).toEqual(2);
  });

  it('return syllables in a word 4', function(){
    expect(syllablesInWord("Emerson")).toEqual(3);
  });

  it('return syllables in a word 5', function(){
    expect(syllablesInWord("roundhouse")).toEqual(2);
  });

  it('return syllables in a word 6', function(){
    expect(syllablesInWord("blackguard")).toEqual(2);
  });

  it('return syllables in a word 7', function(){
    expect(syllablesInWord("tickle")).toEqual(2);
  });

  it('return syllables in a word 8', function(){
    expect(syllablesInWord("outside")).toEqual(2);
  });

  it('return syllables in a word 9', function(){
    expect(syllablesInWord("tyranosaurus")).toEqual(5);
  });

});
