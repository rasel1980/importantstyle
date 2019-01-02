
;(function($){
	$(function(){

		 //Begin input common focus and blur for value.
		  $('.main-wrap input:text,.main-wrap input:password,input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		  $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="phone"],.main-wrap input[type="number"],.main-wrap input[type="search"],.main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		  // Ends input common focus and blur for value.
        
		
         
          
		
          if($('#chosefile').length){
              $('#chosefile').change(function(e){
                  var fileName = e.target.files[0].name;
                  $(".attach-btn-wrap span").text(fileName);
              });
          }
          
          
        if($("select.styled-select").length){
            $('select.styled-select').selectric();
        }
        
        /*  click*/
        $('.main-slider').slick({
            dots: true,
            autoplay:true,
            autoplaySpeed:1000,
            infinite: true,
            navigation:false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });



 /* flexsliderr*/
        
        $(window).on('load', function () {
            // Begin common slider
            if ($('div.slider-wrap').length == 0) return false

            $('div.slider-wrap').flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: false,
                controlNav: true,
                slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                useCSS: false,
                start: function (slider) {
                    //$('body').removeClass('loading');

                },
                animationLoop: true,
                pauseOnAction: false, // default setting

                after: function (slider) {

                }
            })

            $('div.slider-wrap video').trigger('play');

        })
        /* flexslider*/
        
        
        /* destinaion fucos*/
              function setParentHeight(elements, elementParent){
            var t = 0, t_elem;
            $(elements).each(function () {
                $this = $(this);
                if ( $this.outerHeight() > t ) {
                    t_elem=this;
                    t=$this.outerHeight();
                }
            });
            
            $(elements).parent(elementParent).outerHeight(t);  

        }

        setParentHeight('.desination-item', '.destination-item-wrap');
        $(window).on("resize", function(){
            setParentHeight('.desination-item', '.destination-item-wrap');
        });
        
        /* destinaion */
        
        
        
         //Experience tab function 
        $("#tab-nav li").eq(0).addClass('active');
        $("#experience-tab-content-wrap .experience-tab-content").eq(0).show();
        $("#select-tab").html($("#tab-nav li.active").text())
        $("#tab-nav li").each(function(i){
            var $this = $(this);
            
            $this.click(function(){
                if($this.hasClass('active')) return false
                else{
                    $("#tab-nav li").removeClass('active');
                    $this.addClass('active');
                    $("#experience-tab-content-wrap .experience-tab-content").fadeOut();
                    $("#experience-tab-content-wrap .experience-tab-content").eq(i).fadeIn();
                    $("#select-tab").html($this.text())
                    $(".experience-tab-wrap").removeClass('shown');
                }
            })
            
        });
        
          //tab
        
        
        $("#tab-nav-inner li").eq(0).addClass('active');
        $(".tab-content").eq(0).show();
        $("#select-tab").html($("#tab-nav li.active").text())
        $("#tab-nav-inner li").each(function(i){
            var $this = $(this);
            
            $this.click(function(){
                if($this.hasClass('active')) return false
                else{
                    $("#tab-nav-inner li").removeClass('active');
                    $this.addClass('active');
                    $(" .tab-content").fadeOut();
                    $(".tab-content").eq(i).fadeIn();
                    $("#select-tab").html($this.text())
                    $(".tab-nav").removeClass('shown');
                }
            })
            
        });
        
      
       
	})// End ready function.

	
})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})