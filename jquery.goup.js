(function($){function do_animation($obj,type,animation){if(type==="show"){switch(animation){case"fade":$obj.fadeIn();break;case"slide":$obj.slideDown();break;default:$obj.fadeIn()}}else{switch(animation){case"fade":$obj.fadeOut();break;case"slide":$obj.slideUp();break;default:$obj.fadeOut()}}}function click_event($obj,speed){var not_clicked=true;$obj.on("click",function(){if(not_clicked===true){not_clicked=false;$("html, body").animate({scrollTop:0},speed,function(){not_clicked=true})}})}$.goup=function(user_params){var params=$.extend({location:"right",locationOffset:20,bottomOffset:10,containerSize:40,containerRadius:10,containerClass:"goup-container",arrowClass:"goup-arrow",alwaysVisible:false,trigger:500,entryAnimation:"fade",goupSpeed:"slow",hideUnderWidth:500,containerColor:"#000",arrowColor:"#fff",title:"",titleAsText:false,titleAsTextClass:"goup-text",zIndex:1},user_params);if(params.location!=="right"&&params.location!=="left"){params.location="right"}if(params.locationOffset<0){params.locationOffset=0}if(params.bottomOffset<0){params.bottomOffset=0}if(params.containerSize<20){params.containerSize=20}if(params.containerRadius<0){params.containerRadius=0}if(params.trigger<0){params.trigger=0}if(params.hideUnderWidth<0){params.hideUnderWidth=0}var checkColor=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;if(!checkColor.test(params.containerColor)){params.containerColor="#000"}if(!checkColor.test(params.arrowColor)){params.arrowColor="#fff"}if(params.title===""){params.titleAsText=false}if(isNaN(params.zIndex)){params.zIndex=1}var $body=$("body");var $window=$(window);var $container=$("<div>");$container.addClass(params.containerClass);var $arrow=$("<div>");$arrow.addClass(params.arrowClass);$container.html($arrow);$body.append($container);var containerStyle={position:"fixed",width:params.containerSize,height:params.containerSize,background:params.containerColor,cursor:"pointer",display:"none","z-index":params.zIndex};containerStyle["bottom"]=params.bottomOffset;containerStyle[params.location]=params.locationOffset;containerStyle["border-radius"]=params.containerRadius;$container.css(containerStyle);if(!params.titleAsText){$container.attr("title",params.title)}else{var $textContainer=$("<div>");$body.append($textContainer);$textContainer.addClass(params.titleAsTextClass).text(params.title);$textContainer.attr("style",$container.attr("style"));$textContainer.css("background","transparent").css("width",params.containerSize+45).css("height","auto").css("text-align","center").css("box-shadow","rgba(26, 26, 26, 0.1) 0px 1px 3px").css(params.location,params.locationOffset-20);var textContainerHeight=parseInt($textContainer.height())+10;var containerBottom=parseInt($container.css("bottom"));var containerNewBottom=textContainerHeight+containerBottom;$container.css("bottom",containerNewBottom)}var borderSize=0.25*params.containerSize;var arrowStyle={width:0,height:0,margin:"0 auto","padding-top":"17px","border-style":"solid","border-width":"0 "+borderSize+"px "+borderSize+"px "+borderSize+"px","border-color":"transparent transparent #8590A6",};$arrow.css(arrowStyle);var isHidden=false;$window.resize(function(){if($window.outerWidth()<=params.hideUnderWidth){isHidden=true;do_animation($container,"hide",params.entryAnimation);if(typeof($textContainer)!=="undefined"){do_animation($textContainer,"hide",params.entryAnimation)}}else{isHidden=false;$window.trigger("scroll")}});if($window.outerWidth()<=params.hideUnderWidth){isHidden=true;$container.hide();if(typeof($textContainer)!=="undefined"){$textContainer.hide()}}if(!params.alwaysVisible){$window.scroll(function(){if($window.scrollTop()>=params.trigger&&!isHidden){do_animation($container,"show",params.entryAnimation);if(typeof($textContainer)!=="undefined"){do_animation($textContainer,"show",params.entryAnimation)}}else{do_animation($container,"hide",params.entryAnimation);if(typeof($textContainer)!=="undefined"){do_animation($textContainer,"hide",params.entryAnimation)}}})}else{do_animation($container,"show",params.entryAnimation);if(typeof($textContainer)!=="undefined"){do_animation($textContainer,"show",params.entryAnimation)}}if($window.scrollTop()>=params.trigger&&!isHidden){do_animation($container,"show",params.entryAnimation);if(typeof($textContainer)!=="undefined"){do_animation($textContainer,"show",params.entryAnimation)}}click_event($container,params.goupSpeed);if(typeof($textContainer)!=="undefined"){click_event($textContainer,params.goupSpeed)}}}(jQuery));