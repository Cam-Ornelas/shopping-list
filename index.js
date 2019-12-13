// The following function checks item off of the shopping list
function handleComplete() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.stopPropagation();
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });
  };

// The following function adds items from the input field
function submitInfo(){
  $('#js-shopping-list-form').submit(function(){
    event.preventDefault();
    let value = $('#shopping-list-entry').val();
    $('.shopping-list').prepend(`<li> <span class="shopping-item">${value}</span> 
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div> 
  </li>`);
   });
 }

// The following function removes items from the shopping list
  function removeItem(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
  };

  function handleShoppingList() {
    handleComplete();
    submitInfo();
    removeItem();
  }
  
  // when the page loads, call `handleShoppingList`
  $(handleShoppingList);

  