// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// Jquery touch event
// https://github.com/benmajor/jQuery-Touch-Events#3-usage
"use strict";!function(e){function t(){var e=s();e!==r&&(r=e,u.trigger("orientationchange"))}function a(t,a,o,n){var i=o.type;o.type=a,e.event.dispatch.call(t,o,n),o.type=i}e.attrFn=e.attrFn||{};var o=navigator.userAgent.toLowerCase(),n=o.indexOf("chrome")>-1&&(o.indexOf("windows")>-1||o.indexOf("macintosh")>-1||o.indexOf("linux")>-1)&&o.indexOf("mobile")<0&&o.indexOf("android")<0,i={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in window&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in window&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in window&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in window&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!n?"tap":"click",scrollevent:"ontouchstart"in window&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return i.touch_capable},e.getStartEvent=function(){return i.startevent},e.getEndEvent=function(){return i.endevent},e.getMoveEvent=function(){return i.moveevent},e.getTapEvent=function(){return i.tapevent},e.getScrollEvent=function(){return i.scrollevent},e.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,a){e.fn[a]=function(e){return e?this.on(a,e):this.trigger(a)},e.attrFn[a]=!0}),e.event.special.tapstart={setup:function(){var t=this,o=e(t);o.on(i.startevent,function n(e){if(o.data("callee",n),e.which&&1!==e.which)return!1;var c=e.originalEvent,s={position:{x:i.touch_capable?c.touches[0].screenX:e.screenX,y:i.touch_capable?c.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapstart",e,s),!0})},remove:function(){e(this).off(i.startevent,e(this).data.callee)}},e.event.special.tapmove={setup:function(){var t=this,o=e(t);o.on(i.moveevent,function n(e){o.data("callee",n);var c=e.originalEvent,s={position:{x:i.touch_capable?c.touches[0].screenX:e.screenX,y:i.touch_capable?c.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapmove",e,s),!0})},remove:function(){e(this).off(i.moveevent,e(this).data.callee)}},e.event.special.tapend={setup:function(){var t=this,o=e(t);o.on(i.endevent,function n(e){o.data("callee",n);var c=e.originalEvent,s={position:{x:i.touch_capable?c.changedTouches[0].screenX:e.screenX,y:i.touch_capable?c.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapend",e,s),!0})},remove:function(){e(this).off(i.endevent,e(this).data.callee)}},e.event.special.taphold={setup:function(){var t,o=this,n=e(o),c={x:0,y:0},s=0,r=0;n.on(i.startevent,function p(e){if(e.which&&1!==e.which)return!1;n.data("tapheld",!1),t=e.target;var h=e.originalEvent,u=Date.now(),l={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},f={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};return c.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,s=c.x,r=c.y,i.hold_timer=window.setTimeout(function(){var g=c.x-s,d=c.y-r;if(e.target==t&&(c.x==s&&c.y==r||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){n.data("tapheld",!0);var v=Date.now(),w={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},_={x:Math.round(i.touch_capable?h.changedTouches[0].pageX-n.offset().left:e.pageX-n.offset().left),y:Math.round(i.touch_capable?h.changedTouches[0].pageY-n.offset().top:e.pageY-n.offset().top)},T=v-u,x={startTime:u,endTime:v,startPosition:l,startOffset:f,endPosition:w,endOffset:_,duration:T,target:e.target};n.data("callee1",p),a(o,"taphold",e,x)}},i.taphold_threshold),!0}).on(i.endevent,function h(){n.data("callee2",h),n.data("tapheld",!1),window.clearTimeout(i.hold_timer)}).on(i.moveevent,function u(e){n.data("callee3",u),s=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,r=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2).off(i.moveevent,e(this).data.callee3)}},e.event.special.doubletap={setup:function(){var t,o,n,c,s=this,r=e(s),p=null,h=!1;r.on(i.startevent,function u(e){return e.which&&1!==e.which?!1:(r.data("doubletapped",!1),t=e.target,r.data("callee1",u),n=e.originalEvent,p||(p={position:{x:i.touch_capable?n.touches[0].screenX:e.screenX,y:i.touch_capable?n.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-r.offset().left:e.pageX-r.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-r.offset().top:e.pageY-r.offset().top)},time:Date.now(),target:e.target}),!0)}).on(i.endevent,function l(e){var u=Date.now(),f=r.data("lastTouch")||u+1,g=u-f;if(window.clearTimeout(o),r.data("callee2",l),g<i.doubletap_int&&e.target==t&&g>100){r.data("doubletapped",!0),window.clearTimeout(i.tap_timer);var d={position:{x:i.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:i.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-r.offset().left:e.pageX-r.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-r.offset().top:e.pageY-r.offset().top)},time:Date.now(),target:e.target},v={firstTap:p,secondTap:d,interval:d.time-p.time};h||(a(s,"doubletap",e,v),p=null),h=!0,c=window.setTimeout(function(){h=!1},i.doubletap_int)}else r.data("lastTouch",u),o=window.setTimeout(function(){p=null,window.clearTimeout(o)},i.doubletap_int,[e]);r.data("lastTouch",u)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.singletap={setup:function(){var t=this,o=e(t),n=null,c=null,s={x:0,y:0};o.on(i.startevent,function r(e){return e.which&&1!==e.which?!1:(c=Date.now(),n=e.target,o.data("callee1",r),s.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,s.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,!0)}).on(i.endevent,function p(e){if(o.data("callee2",p),e.target==n){var r=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,h=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;i.tap_timer=window.setTimeout(function(){if(!o.data("doubletapped")&&!o.data("tapheld")&&s.x==r&&s.y==h){var n=e.originalEvent,p={position:{x:i.touch_capable?n.changedTouches[0].screenX:e.screenX,y:i.touch_capable?n.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};p.time-c<i.taphold_threshold&&a(t,"singletap",e,p)}},i.doubletap_int)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.tap={setup:function(){var t,o,n=this,c=e(n),s=!1,r=null,p={x:0,y:0};c.on(i.startevent,function h(e){return c.data("callee1",h),e.which&&1!==e.which?!1:(s=!0,p.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,p.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,t=Date.now(),r=e.target,o=e.originalEvent.targetTouches?e.originalEvent.targetTouches:[e],!0)}).on(i.endevent,function u(e){c.data("callee2",u);var h=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,l=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,f=p.x-h,g=p.y-l;if(r==e.target&&s&&Date.now()-t<i.taphold_threshold&&(p.x==h&&p.y==l||f>=-i.tap_pixel_range&&f<=i.tap_pixel_range&&g>=-i.tap_pixel_range&&g<=i.tap_pixel_range)){for(var d=e.originalEvent,v=[],w=0;w<o.length;w++){var _={position:{x:i.touch_capable?d.changedTouches[w].screenX:e.screenX,y:i.touch_capable?d.changedTouches[w].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?d.changedTouches[w].pageX-c.offset().left:e.pageX-c.offset().left),y:Math.round(i.touch_capable?d.changedTouches[w].pageY-c.offset().top:e.pageY-c.offset().top)},time:Date.now(),target:e.target};v.push(_)}a(n,"tap",e,v)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.swipe={setup:function(){function t(a){s=e(a.currentTarget),s.data("callee1",t),h.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,h.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,u.x=h.x,u.y=h.y,r=!0;var o=a.originalEvent;n={position:{x:i.touch_capable?o.touches[0].screenX:a.screenX,y:i.touch_capable?o.touches[0].screenY:a.screenY},offset:{x:Math.round(i.touch_capable?o.changedTouches[0].pageX-s.offset().left:a.pageX-s.offset().left),y:Math.round(i.touch_capable?o.changedTouches[0].pageY-s.offset().top:a.pageY-s.offset().top)},time:Date.now(),target:a.target}}function a(t){s=e(t.currentTarget),s.data("callee2",a),u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;var o,c=s.parent().data("xthreshold")?s.parent().data("xthreshold"):s.data("xthreshold"),l=s.parent().data("ythreshold")?s.parent().data("ythreshold"):s.data("ythreshold"),f="undefined"!=typeof c&&c!==!1&&parseInt(c)?parseInt(c):i.swipe_h_threshold,g="undefined"!=typeof l&&l!==!1&&parseInt(l)?parseInt(l):i.swipe_v_threshold;if(h.y>u.y&&h.y-u.y>g&&(o="swipeup"),h.x<u.x&&u.x-h.x>f&&(o="swiperight"),h.y<u.y&&u.y-h.y>g&&(o="swipedown"),h.x>u.x&&h.x-u.x>f&&(o="swipeleft"),void 0!=o&&r){h.x=0,h.y=0,u.x=0,u.y=0,r=!1;var d=t.originalEvent,v={position:{x:i.touch_capable?d.touches[0].screenX:t.screenX,y:i.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:Math.round(i.touch_capable?d.changedTouches[0].pageX-s.offset().left:t.pageX-s.offset().left),y:Math.round(i.touch_capable?d.changedTouches[0].pageY-s.offset().top:t.pageY-s.offset().top)},time:Date.now(),target:t.target},w=Math.abs(n.position.x-v.position.x),_=Math.abs(n.position.y-v.position.y),T={startEvnt:n,endEvnt:v,direction:o.replace("swipe",""),xAmount:w,yAmount:_,duration:v.time-n.time};p=!0,s.trigger("swipe",T).trigger(o,T)}}function o(t){s=e(t.currentTarget);var a="";if(s.data("callee3",o),p){var c=s.data("xthreshold"),h=s.data("ythreshold"),u="undefined"!=typeof c&&c!==!1&&parseInt(c)?parseInt(c):i.swipe_h_threshold,l="undefined"!=typeof h&&h!==!1&&parseInt(h)?parseInt(h):i.swipe_v_threshold,f=t.originalEvent,g={position:{x:i.touch_capable?f.changedTouches[0].screenX:t.screenX,y:i.touch_capable?f.changedTouches[0].screenY:t.screenY},offset:{x:Math.round(i.touch_capable?f.changedTouches[0].pageX-s.offset().left:t.pageX-s.offset().left),y:Math.round(i.touch_capable?f.changedTouches[0].pageY-s.offset().top:t.pageY-s.offset().top)},time:Date.now(),target:t.target};n.position.y>g.position.y&&n.position.y-g.position.y>l&&(a="swipeup"),n.position.x<g.position.x&&g.position.x-n.position.x>u&&(a="swiperight"),n.position.y<g.position.y&&g.position.y-n.position.y>l&&(a="swipedown"),n.position.x>g.position.x&&n.position.x-g.position.x>u&&(a="swipeleft");var d=Math.abs(n.position.x-g.position.x),v=Math.abs(n.position.y-g.position.y),w={startEvnt:n,endEvnt:g,direction:a.replace("swipe",""),xAmount:d,yAmount:v,duration:g.time-n.time};s.trigger("swipeend",w)}r=!1,p=!1}var n,c=this,s=e(c),r=!1,p=!1,h={x:0,y:0},u={x:0,y:0};s.on(i.startevent,t),s.on(i.moveevent,a),s.on(i.endevent,o)},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.moveevent,e(this).data.callee2).off(i.endevent,e(this).data.callee3)}},e.event.special.scrollstart={setup:function(){function t(e,t){o=t,a(c,o?"scrollstart":"scrollend",e)}var o,n,c=this,s=e(c);s.on(i.scrollevent,function r(e){s.data("callee",r),o||t(e,!0),clearTimeout(n),n=setTimeout(function(){t(e,!1)},50)})},remove:function(){e(this).off(i.scrollevent,e(this).data.callee)}};var c,s,r,p,h,u=e(window),l={0:!0,180:!0};if(i.orientation_support){var f=window.innerWidth||u.width(),g=window.innerHeight||u.height(),d=50;p=f>g&&f-g>d,h=l[window.orientation],(p&&h||!p&&!h)&&(l={"-90":!0,90:!0})}e.event.special.orientationchange=c={setup:function(){return i.orientation_support?!1:(r=s(),u.on("throttledresize",t),!0)},teardown:function(){return i.orientation_support?!1:(u.off("throttledresize",t),!0)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=s=function(){var e=!0,t=document.documentElement;return e=i.orientation_support?l[window.orientation]:t&&t.clientWidth/t.clientHeight<1.1,e?"portrait":"landscape"},e.event.special.throttledresize={setup:function(){e(this).on("resize",x)},teardown:function(){e(this).off("resize",x)}};var v,w,_,T=250,x=function(){w=Date.now(),_=w-y,_>=T?(y=w,e(this).trigger("throttledresize")):(v&&window.clearTimeout(v),v=window.setTimeout(t,T-_))},y=0;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,a){e.event.special[t]={setup:function(){e(this).on(a,e.noop)}}})}(jQuery);
