// consolidate the above 3 listeners into one listener
$('.artist-container').on('click', function() {
  // pull out the data-album-art attribute from the clicked element
  var albumArt = $(this).data('album-art')
  // overwrite the html in the right-half div with an image of the album art
  $(".right-half").html(`<img src='${albumArt}' />`)
})
