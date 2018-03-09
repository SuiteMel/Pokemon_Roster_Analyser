var party = ["trapinch", "55", "66", "107", "togepi", "5"];

$.each(party, function (x, y) {
  var URL = "https://pokeapi.co/api/v2/pokemon/" + y;
  renderCard(URL, x);
});

function renderCard(queryURL, count) {
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {

    var pokeName = $("<span>").text(response.name).addClass("h3");
    var pokeImage = response.sprites.front_default;
    var imageRend = $("<img>").attr("src", pokeImage).addClass("rounded-circle bg-secondary mr-1");
    
    $("#poke" + count).children(".card-header").append(imageRend, pokeName);

    var abil = $("<ul>").text("Abilities: ").addClass("list-inline");
    var types = $("<ul>").text("Type: ").addClass("list-inline");
    var stats = $("<ul>").text("Stats: ").addClass("list-inline");

    for (i = 0; i < response.abilities.length; i++) {
      var abilitys = response.abilities[i].ability.name;
      var abilityName = $("<li>").text(abilitys).addClass("list-inline-item");
      abil.append(abilityName);
    }

    for (j = 0; j < response.types.length; j++) {
      var typeName = $("<li>").text(response.types[j].type.name).addClass("list-inline-item");
      types.append(typeName);
    }

    for (k = 0; k < response.stats.length; k++) {
      var statName = response.stats[k].stat.name;
      var statNum = response.stats[k].base_stat;

      var statLabel = $("<li>").text(statName + ": " + statNum).addClass("list-inline-item");
      stats.append(statLabel);
    }

    $("#poke" + count).children(".card-body").append(abil, types, stats);
  });
}