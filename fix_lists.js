$(document).ready(function(e){
  $('*').bind("showoff:show", function (event) {
    $(event.target).find('ul li').wrapInner('<span class="li" />');
  })
})
