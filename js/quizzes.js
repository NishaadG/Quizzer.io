document.getElementById('color-form').addEventListener('change', function () {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var imageMap = {
    'red': 'images/globe.webp',
    'green': 'images/humanbody.jpeg',
    'blue': 'images/programming2.jpeg',
    'yellow': 'images/animals.jpeg'
  };
  document.getElementById('displayed-image').src = imageMap[selectedColor];
});

document.getElementById('redirect-button').addEventListener('click', function () {
  var selectedColor = document.querySelector('input[name="color"]:checked').value;
  var pageMap = {
    'red': 'geography.html',
    'green': 'humanbody.html',
    'blue': 'programming.html',
    'yellow': 'animals.html'
  };
  window.location.href = pageMap[selectedColor];
});
