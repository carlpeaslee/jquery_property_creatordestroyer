$(document).ready( function () {

// when you click the button at the top of the page we append a random property to the page
  $('#propertyGeneratingButton').on('click', appendRandomProperty);

// when you press the destroy button on a property it removes it from the dom
  $('#generatedProperties').on('click','.property-remover', deleteThisProperty);

});

// this is a random number generator
function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
};

// this is the protype of a property object
function PropertyObject(id, sqFt, $pFt) {
    this.propertyID = id;
    this.squareFootage = sqFt;
    this.$perFoot = $pFt;
};

//this function just returns a new random property object when you call it
function generateRandomPropertyObject() {
    return new PropertyObject(generateRandomNumber(1000, 9999),
                              generateRandomNumber(200, 2000),
                              generateRandomNumber(10, 50));
};

// this large function appends a random property object to the dom
function appendRandomProperty() {
  //here we create a variable to contain a new random property object
  var newRandomPropertyObject = generateRandomPropertyObject();

  //here we add a property div to the dom to contain all the property information
  $('#generatedProperties').append('<div class="property"></div>');

  //here we add text that lists all the new random property's information
  var $lastPropertyElement = $('#generatedProperties').children().last();

  $lastPropertyElement.append('<p>Property ID: ' + newRandomPropertyObject.propertyID + '</p>');
  $lastPropertyElement.append('<p>Square Footage: ' + newRandomPropertyObject.squareFootage + '</p>');
  $lastPropertyElement.append('<p>$/ft: ' + newRandomPropertyObject.$perFoot + '</p>');

  //this is the button that lets us remove a property
  $lastPropertyElement.append('<button class="property-remover">DESTROY</button>');

  //this is just jquery that tells the newly created information to fade in
  $lastPropertyElement.hide().fadeIn();

};

//this function is used by the destroy button to
//remove the property that is parent to the destory button that was clicked
function deleteThisProperty() {
  $(this).parent().fadeOut().delay(400).remove();
}
