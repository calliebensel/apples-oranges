console.log('test');

//longerString takes to strings return the longer one
function longerString(string1, string2) {
  console.log('button clicked - longerString');
  console.log(string1, string2);

  //compare strings
  if(string1.length > string2.length){
    alert(string1 + " is longest");
  } else if (string1.length < string2.length){
    alert(string2 + " is longest");
  } else {
    alert("The Strings are the same length!");
  }

  // bug: what if they are the same length?
}
