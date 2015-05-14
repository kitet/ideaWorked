$(document).ready(function(){
var $container = $('#content').masonry();
$container.imagesLoaded( function() {
  $container.masonry();
  alert("Nothing");
});
});