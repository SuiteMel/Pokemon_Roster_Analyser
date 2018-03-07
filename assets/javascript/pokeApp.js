
var query = "marshtomp";
var queryURL = "https://pokeapi.co/api/v2/pokemon/" + query;
// queryURL += '?' + $.param({
  
// });
//console.log(queryURL);
$.ajax({
  url: queryURL,
  method: 'GET'
}).then(function (response) {
  console.log(queryURL);
  var pokeName = $("<p>").text(response.name);
    
  var pokeImage = response.sprites.front_default;

  var imageRend = $("<img>").attr("src", pokeImage);

  var abil = $("<ul>").text("Abilities: ").addClass("list-inline");
  var types = $("<ul>").text("Type: ").addClass("list-inline");

  for (i = 0; i < response.abilities.length; i++) {
    var abilitys = response.abilities[i].ability.name;
    var abilityName = $("<li>").text(abilitys).addClass("list-inline-item");
    abil.append(abilityName);
  }

  for (j = 0; j < response.types.length; j++) {
    var typeName = $("<li>").text(response.types[j].type.name).addClass("list-inline-item");
    types.append(typeName);
  }
  
  
  (abilityName, typeName);

  $("#pokeReturn").append(pokeName, imageRend, abil, types);
  $("#pokeReturn").addClass("text-capitalize");
});