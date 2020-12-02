//Static list of Product types and common product terms
var types = ['Mens','shirt','Womens','Clearance','Accessories','Kids','Breach Bang Clear','BBC','Rings','Hoodie','tee','patch','professional','riff','pew','barrel','freedom','free','flag','sensitivity',
'operate','forever','edition','cap','black','bitch','winter','watch','splatter','prepared','operation','omelette','morale','college','astronaut','bear'];

/*
//Levenshtein.js
Makes use of levenshtein algorithm to calculate differences between strings
*/
function levenshtein(a, b){
if(a.length == 0) return b.length;
if(b.length == 0) return a.length;

a = a.toLowerCase();
b = b.toLowerCase();

var matrix = [];
var i, ij;
for(i = 0; i <= b.length; i++){
  matrix[i] = [i];
}
for(j = 0; j <= a.length; j++){
  matrix[0][j] = j;
}

for(i = 1; i <= b.length; i++){
  for(j = 1; j <= a.length; j++){
    if(b.charAt(i-1) == a.charAt(j-1)){
      matrix[i][j] = matrix[i-1][j-1];
    } else {
      matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                              Math.min(matrix[i][j-1] + 1, // insertion
                                       matrix[i-1][j] + 1)); // deletion
    }
  }
}

return matrix[b.length][a.length];
};

/*
  String input
  Returns either original uninput if it matches a keyterm or does not closely enough match an existing ptype
  Otherwise, returns a ptype that closely matches the original uninput
*/
function softsearch(input){
  for(i = 0; i < types.length; i++){
      if(input == types[i]){
          return input;
      }
      //Accept differences of up to 4
      if(levenshtein(input, types[i]) < 4){
          return types[i];
      }
  }
  //No existing product types matched closely enough
  return input;
}
