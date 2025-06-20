(function(window) {
  // TODO 2: Create greetings array with 10 'Hello' translations
  var greetings = [
    "Hello", "Hola", "Bonjour", "Ciao", "Hallo",
    "こんにちは", "안녕하세요", "Привет", "Olá", "مرحبا"
  ];

  // TODO 3: Create helloSpeaker object and attach speak method
  var helloSpeaker = {};

  helloSpeaker.speak = function(name) {
    for (var i = 0; i < greetings.length; i++) {
      console.log(greetings[i] + " " + name);
    }
  };

  // TODO 4: Expose helloSpeaker to global scope
  window.helloSpeaker = helloSpeaker;
})(window);
