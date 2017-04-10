// ONLOAD FUNCTION!!  CAN ONLY BE ONE PER JS FILE!!
$(function() {
// First Event:
  // User inputs text and clicks "add item" button.
  // After clicking the button, the text entered is stored into a variable
  $('button[type="submit"]').on('click', function(event){
        event.preventDefault();
        // console.log($(this));
        var userText = $('#shopping-list-entry').val();
        var userItem = userText.toLowerCase();
        // console.log(userItem);
  //the user input value (item) gets displayed:
      // - at the bottom of the list
      // - with a border around it
      // - with a check button
      // - with a delete button
      $('ul').append('<li>' + '<span class="shopping-item">' + userItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle" onclick="checkItem(this)"><span class="button-label">' + 'check' + '</span></button><button class="shopping-item-delete" onclick="deleteItem(this)"><span class="button-label">' + 'delete' + '</span></button></div></li>')
  });
});


function checkItem(item) {
// Second Event:
  // User clicks the check button:
    // If item is currently unchecked, "check" the item.
    // If item is currently checked, "un-check" the item.
  // $('.shopping-item-toggle').on('click', function(event) {
    // event.preventDefault();
    // debugger
    var topSibling = $(item).closest('.shopping-item-controls').siblings('.shopping-item');
    console.log(topSibling);

    $(item).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
  // });
}

function deleteItem() {
// Third Event:
  // User clicks the delete button:
    // Item & it's border and buttons are permanently deleted.
  $('.shopping-item-delete').on('click', function(event) {
    console.log("Dave");
    event.preventDefault();
    $(this).closest('li').remove();
  });
}


