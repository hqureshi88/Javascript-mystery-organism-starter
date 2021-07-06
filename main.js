// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dna_arr) {
  return ({
    specimenNum: num, 
    dna: dna_arr,
    method (){ //randomly selects a base in objects dna property and changing current base to a different base.
      console.log(dna_arr);
      let random = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      while(dna_arr[random] == newBase) {
        newBase = returnRandBase();
      } 
      dna_arr[random] = newBase
      console.log(dna_arr);
    },
    compareDNA(pAequor){
      console.log(this.dna);
      console.log(pAequor.dna);
      let match = 0;
      for (let i = 0; i < this.dna.length-1; i++){
        if(this.dna[i] == pAequor.dna[i]){
          match += 1;
        }
      }
      let ratio = Math.round((match/this.dna.length)*100);

      return `specimen #1 and specimen #2 have ${ratio}% DNA in common`;
    }
  });
}

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());

// console.log(test.dna);
console.log(test1.compareDNA(test2));

// test.method();


// console.log(test.dna);



