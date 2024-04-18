document.getElementById('color-form').addEventListener('change', function() {
    var selectedColor = document.querySelector('input[name="color"]:checked').value;
    switch(selectedColor) {
      case 'red':
        document.getElementById('displayed-image').src = 'images/globe.webp'; // Replace 'red-image.jpg' with the path to your red image
        break;
      case 'green':
        document.getElementById('displayed-image').src = 'images/humanbody.jpeg'; // Replace 'green-image.jpg' with the path to your green image
        break;
      case 'blue':
        document.getElementById('displayed-image').src = 'images/programming2.jpeg'; // Replace 'blue-image.jpg' with the path to your blue image
        break;
        case 'yellow':
        document.getElementById('displayed-image').src = 'images/animals.jpeg'; // Replace 'blue-image.jpg' with the path to your blue image
        break;
      default:
        // Default action if no color is selected
        break;
    }
  });
  
  document.getElementById('redirect-button').addEventListener('click', function() {
    var selectedColor = document.querySelector('input[name="color"]:checked').value;
    switch(selectedColor) {
      case 'red':
        window.location.href = 'geography.html'; // Replace 'red-page.html' with the URL you want to redirect to for the red color
        break;
      case 'green':
        window.location.href = 'humanbody.html'; // Replace 'green-page.html' with the URL you want to redirect to for the green color
        break;
      case 'blue':
        window.location.href = 'programming.html'; // Replace 'blue-page.html' with the URL you want to redirect to for the blue color
        break;
        case 'yellow':
        window.location.href = 'animals.html'; // Replace 'blue-page.html' with the URL you want to redirect to for the blue color
        break;
      default:
        // Default action if no color is selected
        break;
    }
  });
  