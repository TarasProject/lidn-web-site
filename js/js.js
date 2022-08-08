/*Page portfolio-detalis*/
/*SLICK slider*/
$(document).ready(function(){
  $('.sl').slick({

  	arrows:false,
  	fade:true, // зміна слайдів зникнуння
  	// draggable:false, //забороняє гортати
  	asNavFor: '.sl2',
  });
  $('.sl2').slick({  	
  	arrows:false,  	
  	slidesToShow:4,
  	asNavFor: '.sl',
  	focusOnSelect: true,
  });
});

// Regular map
var map = null;
function init() {
    map = new MetaMapsOL.Map('map');}
//   var map = null;
// function init() {
//     // Создаём карту и элементы управления.
//     map = new MetaMapsOL.Map('map', {
//         controls: [
//         new OpenLayers.Control.Permalink(),
//         // overlaysList - имя списка для слоёв наложения.
//         new MetaMapsOL.Control.LayerSwitcher({overlaysList: 'Слои'}),
//         new MetaMapsOL.Control.PanZoom(),
//         new OpenLayers.Control.ScaleLine(),
//         new MetaMapsOL.Control.OverviewMap({
//             size:     {
//                 w:180,
//                 h:120
//             }
//         })
//         ]
//     });
//     // Добавляем слой маркеров с именем "Маркеры" и позволяем слою отображаться в списке слоёв наложения.
//     var markers = new MetaMapsOL.Layer.Markers.Movable("Маркеры", {
//         displayInLayerSwitcher: true
//     });
//     map.addLayer(markers);

//     // Создаём объект границ.
//     var extent = new OpenLayers.Bounds();
    
//     // Создаём размер, смещение центра и иконку маркера.
//   var size = new OpenLayers.Size(32, 32);
//   var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
//   var icon = new OpenLayers.Icon("http://map.meta.ua/i/icons/1_04.png", size, offset);

//     for(var i=0; i<10; i++) {
//         // Создаём объект LonLat со случайными координатами.
//         var ll = new OpenLayers.LonLat(getRandomArbitary(36.12, 36.4), getRandomArbitary(49.9, 50.02)).transform(map.displayProjection, map.projection);
//         // Создаём объект Маркера. Использовать один объект icon для нескольких маркеров нельзя.
//         // icon будет отрисован только в позиции последнего маркера.
//         // Поэтому для каждого маркера создаём свою копию icon.
//         var marker = new MetaMapsOL.Marker(ll, icon.clone());
//         // Добавляем маркер на карту.
//         markers.addMarker(marker);
        
//         // Расширяем объект границ до позиции текущего маркера.
//         extent.extend(ll);
//     }
//     // Устанавливаем центр и зум карты.
//     map.setCenter(extent.getCenterLonLat(), map.getZoomForExtent(extent));
// }

// function getRandomArbitary(min, max) {
//   return Math.random() * (max - min) + min;
// }
  
