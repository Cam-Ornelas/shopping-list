// The following function checks item off of the shopping list
function handleComplete() {
    $('.shopping-item-toggle').click(function(event) {
        event.stopPropagation();
        $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    });
  };

  $(handleComplete);

// The following function adds items from the input field
function submitInfo(){
  $('form').submit(function(){
    let value = $(this).find('#shopping-list-entry');
    $('ul').prepend(`<li> ${value.val()} </li>`);
    value.val("");
    event.preventDefault();
   });
 };

  $(submitInfo);

// The following function removes items from the shopping list
  function removeItem(){
    $('.shopping-item-delete').click(function(event) {
        event.stopPropagation();
        $(this).closest('li').find('span.shopping-item, div.shopping-item-controls').remove();
    });
  };

  $(removeItem);