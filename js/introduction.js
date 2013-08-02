/*
 * INTRODUCTION.JS
 * Introduction is a slide of images that is shown at the beginning of some stages
 * It is to introduce new particles, new elements, or some basic tutorials
 */

(function($) {
    $.fn.introduction = function(options) {
        var imgsContainerElmt, textsContainerElmt, prevBtnElmt, nextBtnElmt, images, imgPointer;
        var settings;
        
        var elmt = $(this);
        
        // define wide-used functions in this plugins
        var saveInfo = function() {
            elmt.data("imgsContainerElmt", imgsContainerElmt);
            elmt.data("textsContainerElmt", textsContainerElmt);
            elmt.data("prevBtnElmt", prevBtnElmt);
            elmt.data("nextBtnElmt", nextBtnElmt);
            elmt.data("closeBtnElmt", closeBtnElmt);
            elmt.data("images", images);
            elmt.data("imgPointer", imgPointer);
            
            elmt.data("settings", settings);
        }
        var loadInfo = function() {
            imgsContainerElmt = elmt.data("imgsContainerElmt");
            textsContainerElmt = elmt.data("textsContainerElmt");
            prevBtnElmt = elmt.data("prevBtnElmt");
            nextBtnElmt = elmt.data("nextBtnElmt");
            closeBtnElmt = elmt.data("closeBtnElmt");
            images = elmt.data("images");
            imgPointer = elmt.data("imgPointer");
            
            settings = elmt.data("settings");
        }
        
        if (typeof options === "undefined") options = {};
        
        /***** create the introduction elements *****/
        if (typeof options === "object") {
        
            // default options values
            settings = $.extend({
                images: [], // array of sources of images
                texts: [],
                onclose: function() {}
            }, options);
            
            // load all images first
            var images = [];
            var imgPointer = 0;
            var loadedImages = 0;
            for (var i = 0; i < settings.images.length; i++) {
                var img = new Image();
                // add image load handler here // ???
                img.src = settings.images[i];
                images.push(img);
            }
            
            // append an introduction images and texts container
            elmt.append("<div class='intro-images'>Loading...</div>");
            elmt.append("<div class='intro-texts'></div>");
            
            // append 3 buttons (prev, next, and close)
            elmt.append("<input type='button' class='intro-prev' value='Prev'/>");
            elmt.append("<input type='button' class='intro-next' value='Next'/>");
            elmt.append("<input type='button' class='intro-close' value='Close'/>");
            
            // get the new elements
            imgsContainerElmt = elmt.find(".intro-images");
            textsContainerElmt = elmt.find(".intro-texts");
            prevBtnElmt = elmt.find(".intro-prev");
            nextBtnElmt = elmt.find(".intro-next");
            closeBtnElmt = elmt.find(".intro-close");
            
            // save the important variables into the element
            saveInfo();
            
            // set the element invisible first to setup the element
            elmt.css("display", "none");
            
            // set the button event handler
            prevBtnElmt.click(function() {elmt.introduction("prev")});
            nextBtnElmt.click(function() {elmt.introduction("next")});
            closeBtnElmt.click(function() {elmt.introduction("close")});
            
            // add the first image
            // imgsContainerElmt.html("<img src='"+images[imgPointer].src+"'/>");
            imgsContainerElmt.html(images[imgPointer]);
            textsContainerElmt.html(settings.texts[imgPointer]);
            
            // set the initial state of next and prev button
            if (imgPointer == 0) {
                prevBtnElmt.attr("disabled", "true");
            }
            if (imgPointer == images.length - 1) {
                nextBtnElmt.attr("disabled", "true");
            }
            
            // now display the window with some styling
            elmt.css("display", "block");
            elmt.css("position", "fixed");
            elmt.css("top", "0px");
            elmt.css("left", "0px");
            elmt.css("width", "100%");
            elmt.css("height", "100%");
            elmt.css("z-index", "999999");
            elmt.css("background", "white");
        }
        
        // show next image
        else if (options == "next") {
            
            // get the saved information
            loadInfo();
            
            // if there is still next image, then load the next image while increasing the pointer
            if (imgPointer < images.length - 1) {
                imgsContainerElmt.html(images[++imgPointer]);
                textsContainerElmt.html(settings.texts[imgPointer]);
            }
            
            // if it already reaches the last image, then disable this button
            if (imgPointer == images.length - 1) {
                nextBtnElmt.attr("disabled", "true");
            }
            
            // it just from the beginning, then enable the prev button
            if (imgPointer == 1) {
                prevBtnElmt.removeAttr("disabled");
            }
            
            // save the latest condition
            saveInfo();
        }
        
        // show prev image
        else if (options == "prev") {
            
            // get the saved information
            loadInfo();
            
            // if there is still prev image, then load the image and decreasing the pointer
            if (imgPointer > 0) {
                imgsContainerElmt.html(images[--imgPointer]);
                textsContainerElmt.html(settings.texts[imgPointer]);
            }
            
            // if it reaches the beginning of the slide, then disable this button
            if (imgPointer == 0) {
                prevBtnElmt.attr("disabled", "true");
            }
            
            // if it just from the last image, then re-enable the next button
            if (imgPointer == images.length - 2) {
                nextBtnElmt.removeAttr("disabled");
            }
            
            // save the latest condition
            saveInfo();
        }
        
        // close the "window" and execute the close handler
        else if (options == "close") {
            loadInfo();
            elmt.html("");
            elmt.css("display", "none");
            settings.onclose();
        }
        return this;
    }
    
}(jQuery));
