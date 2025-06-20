(function() {
  // TODO 1: Create names array with some names starting with 'JS'/'js' and some normal names
  var names = ["jsmith", "John", "JSandra", "Alice", "jason", "Bob"];

  // TODO 8: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // TODO 9: Retrieve first and second letters, make lowercase for comparison
    var firstLetter = names[i].charAt(0).toLowerCase();
    var secondLetter = names[i].charAt(1).toLowerCase();

    // TODO 10: If first two letters are 'j' and 's', say goodbye, else say hello
    if (firstLetter === 'j' && secondLetter === 's') {
      goodbyeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
