document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('.summon-cats')
  var catBoxes = document.querySelectorAll('.cat-box')


  button.addEventListener('click', function() {
    console.log("click successful")

    $.ajax( {
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'json',
    data: { number: 4
      }
    } ).done( function( data ) {
       console.log("request succeeded");
       console.log(data);

          for (var i = 0; i < data.cats.length; i++) {

            var cat = data.cats[i];
            var catBox = catBoxes[i]

            var myElement = document.createElement( 'img');
            myElement.setAttribute('src', cat.photo);
            myElement.setAttribute('alt', 'Photo of ' + cat.name);
            catBox.appendChild(myElement);
      }
    })

  });

})
