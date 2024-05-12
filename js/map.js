ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [59.94, 30.31],
    zoom: 10,
  });

  let placeCoordinates = [59.94, 30.31];

  let myPlacemark = new ymaps.Placemark(placeCoordinates, {
    hintContent: 'Место проживания',
  });

  myMap.geoObjects.add(myPlacemark);

  document.getElementById("preloader").style.display = "none";
}
   