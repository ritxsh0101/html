(function(window) {
  // TODO 5: Create farewell array with 10 'Goodbye' translations
  var farewell = [
    "Goodbye", "Adiós", "Au revoir", "Addio", "Tschüss",
    "さようなら", "안녕히 가세요", "До свидания", "Adeus", "مع السلامة"
  ];

  // TODO 6: Create goodbyeSpeaker object and attach speak method
  var goodbyeSpeaker = {};

  goodbyeSpeaker.speak = function(name) {
    for (var i = 0; i < farewell.length; i++) {
      console.log(farewell[i] + " " + name);
    }
  };

  // TODO 7: Expose goodbyeSpeaker to global scope
  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);
