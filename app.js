// $(function() {


// First Event:
  // User inputs text and clicks "add item" button.
  // After clicking the button, the text entered is stored into a variable
  $('button').on('click', function(){
        var userText = $('#shopping-list-entry').val();
        var userItem = userText.toLowerCase();
        console.log(userItem);
  //the user input value (item) gets displayed:
      // - at the bottom of the list
      // - with a border around it
      // - with a check button
      // - with a delete button
      $("ul").append("<li>" + userItem + "</li>");
      event.preventDefault();
      $(userItem).addClass('shopping-item-toggle', 'shopping-item-delete');

  });




// Second Event:
  // User clicks the check button:
    // If item is currently unchecked, "check" the item.
    // If item is currently checked, "un-check" the item.
  $('ul').on('click', 'li', function(event) {
    event.preventDefault();
    $(this).toggleClass('shopping-list__unchecked');
  });

// Third Event:
  // User clicks the delete button:
    // Item & it's border and buttons are permanently deleted.
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });




















// });
