
function getResult(userInput) {
	var searchItem;
	$('.resultContainer').html('');
	$.ajax({
		type: 'GET',
		async: false,
		url: 'https://api.nutritionix.com/v1_1/search/'+userInput+'?'+
		'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=91d21742&appKey=6aac931ef97304cd15f6de495dd94d9a',
		success: function(d) {
			searchItem = d.hits;
		}
	});

	searchItem.map(function(item) {
		var x = item.fields
		$('.resultContainer').append(
			'<div class="itemBar">'+
				'<h2>' + x.item_name + '<h2>' +
				'<h3>Calories: ' + x.nf_calories + '<h3>' +
				'<h3>Serving Size: ' + x.nf_serving_size_qty + ' ' + x.nf_serving_size_unit +'<h3>' +
				'<h3>Total Fat: ' + x.nf_total_fat + '<h3>' + 
			'</div>'
			);
	});
}

function searchValue() {
	var formVal = document.getElementById('searchBar').value;
	getResult(formVal);
}

function previousItem(obj) {
    var previtem = $(obj).text();
    getResult(previtem);
}

$('.searchForm').submit(function(e) {
	e.preventDefault();
});

$('.searchForm').submit(function(){
    $('.prevSearch').show();
    $('.space').hide();
    $('#searchBar').removeClass('width');
    $('#btn').removeClass('btn');
    $('br').addClass('remove');
    $('h1').removeClass('h1');
    $('p').removeClass('p');
    $('#btn').removeClass('btn-1');
});