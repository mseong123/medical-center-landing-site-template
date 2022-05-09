//SECTION 4 CAROUSEL-FACILITIES
//disable auto-cycling functionality for carousel plugin otherwise interfere with modification below (.active class in carousel will keep changing in background even when modal is not activated)

$("#carousel-facilities").carousel({interval:null});

//section-4-facilities carousel plugin minor modification with jQuery=> to ensure clicked <img> matches carousel start default <img>. This is done byattaching class .active on the index of carousel .item based on (and only when) index of <img> is clicked. *also remove .active on previous .item otherwise will break the intended modification.

$(document).on("click",'[data-custom]',function() {
  var $this=$(this);
  var index=$this.attr('data-custom');
  var $items=$this.parents('.container').find('.item');
  $items.parent().find(".active").removeClass("active");
  $items.eq(index).addClass("active");
})


//SECTION 5 TESTIMONIAL
//Use Popover Bootstrap plugin with changed options 1) placement:top as default with auto functionality(in case viewport does not fit, automatically reverts to placement bottom) 2) html insertion of popover-content 3) addition of class .popover-custom (to change color properties) to template property in instance. 
$("[data-toggle='popover']").popover({placement:"auto top",html:true,template: '<div class="popover popover-custom" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});