// Animals   
/* global $ */ 
const topics = ['Tiger', 'Lion', 'Zebra', 'Duck', 'Hyena'];
appendButtons()
function appendButtons(){
  $('#buttons').empty()
for (var i=0; i < topics.length; i++){
  $('#buttons').append(`<button onClick="getGiphys('${topics[i]}')">${topics[i]}</button><br><br>`)
  }
}

function getGiphys(query){
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    method: 'GET',
    data: { api_key: 'z6n3sVl4nVDy7yRuNovxQ3st3aa0R4bT', q: query, limit: 10 }
  }).done(function (result) {
    displayGiphys(result.data)
    console.log(result)
  }).fail(function (result) {
    console.log(result)
  });
}

function displayGiphys(data){
  $('#images').empty()
  for (var i=0; i < data.length; i++){
    var getImages = data[i]
    var images = getImages.images['480w_still']['url']
    var giphy = getImages.images['downsized']['url']
    var rating = getImages.rating 
    $('#images').append(`<img src="${images}" onClick="toggleGiphys(this)"data-giphy="${giphy}" data-still="${images}" data-toggle="false" style="width: 200px"/> <div>${rating}</div>`)
  }
}

function toggleGiphys(element){
  if (element.getAttribute('src') === element.dataset.giphy){
    return element.setAttribute('src', element.dataset.still)
  } 
  element.setAttribute('src', element.dataset.giphy)
}

function getInput(){
  event.preventDefault()
  topics.push($('#input').val())
  appendButtons()
}
