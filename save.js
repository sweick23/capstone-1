var state = {
  prevSearch: []
};


var listBluePrint = (
  '<li>' +
   '<div id="background">' +
    '<a id="previous" class="previous-item js-previous-item" onclick="previousItem(this)"></a>' +
    '</div>' +
  '</li>'
);



function addItem(state, item) {
  state.prevSearch.push({
    displayName: item,
    
  });
}

function getItem(state, itemIndex) {
  return state.prevSearch[itemIndex];
}



function updateItem(state, itemIndex, newStateItems) {
  state.prevSearch[itemIndex] = newStateItems;
}



function setItem(item, itemId, itemTemplate, data) {
  var element = $(itemTemplate);
  element.find('.js-previous-item').text(item.displayName);
  return element;
}

function initializeList(state, element, data) {
  var itemsHTML = state.prevSearch.map(
    function(item, index) {
      return setItem(item, index, listBluePrint, data);
  });
  element.html(itemsHTML);
}




function handleItemAdds(
  formElement, identifier, data, element, state) {

  formElement.submit(function(event) {
    event.preventDefault();
    var newItem = formElement.find(identifier).val();
    addItem(state, newItem);
    initializeList(state, element, data);
    
    this.reset();
  });
}



$(function() {
  var formElement = $('#js-previous-search-form');
  var element = $('.js-previous-list');


  var identifier = '.js-new-item';

  var itemData = 'data-list-item-id';




  handleItemAdds(
    formElement, identifier, itemData, element, state);

});