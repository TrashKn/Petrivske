$( document ).ready( function() {

   /**
    *
    * strict mode
    *
    */

    'use strict';

   /**
    *
    * global variables
    *
    */

    var martanianLuxuryApartmentsIsotopes = [];
    var martanianLuxuryApartmentsIntervals = [];
    var martanianLuxuryApartmentsPageWidth = 0;
    var martanianLuxuryApartmentsResponsiveMenuVisible = false;

   /**
    *
    * functions after window load
    *
    */

    $( window ).load( function() {

       /**
        *
        * configure images backgrounds
        *
        */

        $.martanianLuxuryApartmentsConfigureImagesBackgrounds();

       /**
        *
        * configure heading slider
        *
        */

        $.martanianLuxuryApartmentsConfigureHeadingSlider();

       /**
        *
        * configure google map
        *
        */

        $.martanianLuxuryApartmentsConfigureGoogleMaps();

       /**
        *
        * configure isotopes
        *
        */

        $.martanianLuxuryApartmentsConfigureIsotope();

       /**
        *
        * configure faq questions
        *
        */

        $.martanianLuxuryApartmentsConfigureFAQs();

       /**
        *
        * configure references slider
        *
        */

        $.martanianLuxuryApartmentsConfigureReferencesSlider();

       /**
        *
        * configure property summary box
        *
        */

        $.martanianLuxuryApartmentsConfigurePropertySummaryBox();

       /**
        *
        * configure logos slider
        *
        */

        $.martanianLuxuryApartmentsConfigureLogosSlider();

       /**
        *
        * configure images slider
        *
        */

        $.martanianLuxuryApartmentsConfigureImagesSlider();

       /**
        *
        * configure images for magnific popup
        *
        */

        $.martanianLuxuryApartmentsConfigureImagesForMagnificPopup();

       /**
        *
        * configure selects
        *
        */

        $.martanianLuxuryApartmentsConfigureSelects();

       /**
        *
        * configure date fields
        *
        */

        $.martanianLuxuryApartmentsConfigureDateFields();

       /**
        *
        * configure checkbox
        *
        */

        $.martanianLuxuryApartmentsConfigureCheckbox();

       /**
        *
        * configure responsive menu
        *
        */

        $.martanianLuxuryApartmentsConfigureResponsiveMenu();

       /**
        *
        * page width
        *
        */

        martanianLuxuryApartmentsPageWidth = $( 'body' ).width();

       /**
        *
        * delete loader
        *
        */

        $( '#loader' ).animate({ 'opacity': 0 }, 300 );
        setTimeout( function() {

            $( '#loader' ).remove();

        }, 600 );

       /**
        *
        * end of functions.
        *
        */

    });

   /**
    *
    * resize functions
    *
    */

    $.martanianLuxuryApartmentsResizeFunction = function() {

       /**
        *
        * page width
        *
        */

        var newPageWidth = $( 'body' ).width();
        if( newPageWidth != martanianLuxuryApartmentsPageWidth ) {

           /**
            *
            * update current page width
            *
            */

            martanianLuxuryApartmentsPageWidth = newPageWidth;

           /**
            *
            * reconfigure logos slider
            *
            */

            $.martanianLuxuryApartmentsConfigureLogosSlider();

           /**
            *
            * reconfigure references slider
            *
            */

            $( 'section.references' ).each( function() {

                var slider = $( this ).find( '.references-slider' );
                var activeSlide = slider.find( '.single-reference.active' );
                var paddingTop = parseInt( slider.find( '.single-reference' ).first().css( 'padding-top' ), 10 );
                var paddingBottom = parseInt( slider.find( '.single-reference' ).first().css( 'padding-bottom' ), 10 );

                slider.css({ 'height': activeSlide.height() + paddingTop + paddingBottom })

            });

           /**
            *
            * reconfigure property summary box
            *
            */

            $( 'section.property-summary' ).each( function() {

                var contents = $( this ).find( '.property-summary-contents' );
                var activeContent = contents.find( '.property-summary-content.active' );
                
                contents.css({ 'height': activeContent.height() });

            });

           /**
            *
            * reconfigure map height in location details box
            *
            */

            $( '.location-details-map' ).each( function() {
                var panoramadiv = $('#pano');
                var mapBox = $( this );
                var description = mapBox.siblings( '.location-details-description' );
                var contentSize = parseInt( mapBox.parents( 'section.location-details' ).css( 'width' ), 10 );
                
                if( contentSize < 932 ) mapBox.css({ 'height': '360px' });
                else mapBox.css({ 'height': (description.length == 0 ? '400px' : description.height()) });

                if (contentSize < 932) panoramadiv.css({ 'height': '360px' });
                else panoramadiv.css({ 'height': (description.length == 0 ? '400px' : description.height() - description.height() / 2) });

                
            });

           /**
            *
            * set popup absolute if too long
            *
            */

            var popup = $( '#form-popup' );
            if( popup.length != 0 ) {

                var popupBackground = popup.children( '.form-popup-background' );
                var popupContent = popup.children( '.form-popup-content' );

                if( popupBackground.css( 'display' ) == 'block' ) {

                    var popupContentHeight = popupContent.height() + 6 + parseInt( popupContent.css( 'padding-top' ), 10 ) + parseInt( popupContent.css( 'padding-bottom' ), 10 ) + 200;
                    if( $( window ).height() < popupContentHeight && popupContent.css( 'position' ) == 'fixed' ) {

                        popupContent.css({ 'position': 'absolute' });
                        $( 'html, body' ).animate({ 'scrollTop': '0' }, 300 );
                    }
                }
            }

           /**
            *
            * configure responsive menu
            *
            */

            $.martanianLuxuryApartmentsConfigureResponsiveMenu();

           /**
            *
            * end of functions
            *
            */
        }

       /**
        *
        * end of functions
        *
        */
    }

   /**
    *
    * catch resize actions
    *
    */

    $( window ).resize( function() { $.martanianLuxuryApartmentsResizeFunction(); });
    $( window ).on( 'orientationchange', function() { $.martanianLuxuryApartmentsResizeFunction(); });

   /**
    *
    * configure images backgrounds
    *
    */

    $.martanianLuxuryApartmentsConfigureImagesBackgrounds = function() {

        $( '.image-data-for-parent' ).each( function() {

            var image = $( this );
            var imageSrc = image.attr( 'src' );
            var imagePositionY = image.data( 'image-position-y' );
            var imagePositionX = image.data( 'image-position-x' );

            imagePositionY = typeof imagePositionY != 'undefined' && imagePositionY != '' && imagePositionY !== false && imagePositionY !== null ? imagePositionY : '50%';
            imagePositionX = typeof imagePositionX != 'undefined' && imagePositionX != '' && imagePositionX !== false && imagePositionX !== null ? imagePositionX : '50%';

            image.parent().css({ 'background-image': 'url('+ imageSrc +')', 'background-position-y': imagePositionY, 'background-position-x': imagePositionX });
            image.remove();

        });

    };

   /**
    *
    * google map
    *
    */

    $.martanianLuxuryApartmentsConfigureGoogleMaps = function() {

        var mapID = 1;
        var iconBase = '../../_assets/_img/';
        var icons = {
            marker: { icon: iconBase +'map-marker.png' },
            school: { icon: iconBase +'map-school.png' },
            store: { icon: iconBase +'map-store.png' },
            gas_station: { icon: iconBase +'map-gas-station.png' },
            mall: { icon: iconBase +'map-mall.png' },
            bus_stop: { icon: iconBase +'map-bus-stop.png' }
        };

        $( '.location-details-map' ).each( function() {
            
            var mapBox = $(this);
            var panoramadiv = $('#pano');
            var lat = mapBox.data( 'lat' );
            var lng = mapBox.data( 'lng' );
            var zoomedOut = false;
            var zoom = mapBox.data( 'zoom-level' );
            var description = mapBox.siblings( '.location-details-description' );
            var contentSize = parseInt( mapBox.parents( 'section.location-details' ).css( 'width' ), 10 );

            if( contentSize < 690 && zoom > 1 ) {

                zoom = zoom - 1;
                zoomedOut = true;
            }

            mapBox.attr( 'id', 'google-map-'+ mapID );

            if( contentSize < 932 ) mapBox.css({ 'height': '360px' });
            else mapBox.css({ 'height': (description.length == 0 ? '400px' : description.height() - description.height() / 2) });

            if (contentSize < 932) panoramadiv.css({ 'height': '360px' });
            else panoramadiv.css({ 'height': (description.length == 0 ? '400px' : description.height() - description.height() / 2) });

            var map = new google.maps.Map( document.getElementById( 'google-map-'+ mapID ), {
                zoom: zoom,
                center: new google.maps.LatLng( lat, lng ),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
            });
            var fenway = { lat: 50.39227918995235, lng: 30.314423484237523 };
            var panorama = new google.maps.StreetViewPanorama(
              document.getElementById('pano'), {
                  position: fenway,
                  pov: {
                      heading: 0,
                      pitch: 0
                  }
              });
            map.setStreetView(panorama);



            mapBox.siblings( '.location-details-map-marker' ).each( function() {

                var markerLat = $( this ).data( 'lat' );
                var markerLng = $( this ).data( 'lng' );
                var markerType = $(this).data('type');
                var markerTitle = $(this).data('title');
                var markerDescription = $(this).data('description');
                var infowindow = new google.maps.InfoWindow({
                    content: '<h4 style="margin-bottom: 8px;">' + markerTitle + '</h4>' + markerDescription
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng( markerLat, markerLng ),
                    icon: icons[markerType].icon,
                    map: map
                });
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });

            });

            google.maps.event.addDomListener( window, 'resize', function() {

                var mapCenter = map.getCenter();

                google.maps.event.trigger( map, 'resize' );
                map.setCenter( mapCenter );

               /**
                *
                * zoom-in and zoom-out for map
                *
                */

                var currentZoom = map.getZoom();
                contentSize = parseInt( mapBox.parents( 'section.location-details' ).css( 'width' ), 10 );

                if( contentSize < 690 && zoomedOut == false ) {

                    map.setZoom( currentZoom - 1 );
                    zoomedOut = true;
                }

                else if( contentSize >= 690 && zoomedOut == true ) {

                    map.setZoom( currentZoom + 1 );
                    zoomedOut = false;
                }

            });

            mapID++;

        });

    };

   /**
    *
    * configure isotope functions
    *
    */

    $.martanianLuxuryApartmentsConfigureIsotope = function() {

        var isotopeID = 1;
        $( 'section.gallery' ).each( function() {

            var gallery = $( this );
            gallery.attr( 'data-isotope-id', isotopeID );

            martanianLuxuryApartmentsIsotopes[isotopeID] = gallery.children( '.gallery-images' ).isotope({ itemSelector: '.gallery-single-image' });
            gallery.find( '.gallery-single-image' ).addClass( 'isotope-element-visible' );

            isotopeID++;

        });

    };

   /**
    *
    * filter isotopes
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.gallery .gallery-filters .filter', function( event ) {

        event.preventDefault();

        var isotope = $( this ).parent().parent();
        var isotopeID = isotope.data( 'isotope-id' );
        var filterValue = $( this ).data( 'filter' );

        martanianLuxuryApartmentsIsotopes[isotopeID].isotope({ filter: filterValue });

        isotope.find( '.gallery-filters' ).children( '.filter' ).removeClass( 'filter-active' );
        $( this ).addClass( 'filter-active' );

        isotope.find( '.gallery-single-image' ).removeClass( 'isotope-element-visible' );
        var filteredElements = martanianLuxuryApartmentsIsotopes[isotopeID].isotope( 'getFilteredItemElements' );
        for( var i = 0; i < filteredElements.length; i++ ) {

            var filteredElement = $( filteredElements[i] );
            filteredElement.addClass( 'isotope-element-visible' );

        };

    });

   /**
    *
    * configure faq questions
    *
    */

    $.martanianLuxuryApartmentsConfigureFAQs = function() {

        $( 'section.faq' ).each( function() {

            var faq = $( this );
            var firstQuestion = faq.children( '.single-faq' ).first();

            firstQuestion.addClass( 'single-faq-active' );
            firstQuestion.find( '.single-faq-answer' ).slideDown();
            firstQuestion.find( 'button.tcon' ).addClass( 'tcon-transform' );

        });
    };

   /**
    *
    * show / hide faq questions
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.faq .single-faq-title', function() {

        var element = $( this ).parent();
        var icon = element.find( 'button.tcon' );
        var active = element.hasClass( 'single-faq-active' );

        if( active == false ) {

            element.siblings( '.single-faq.single-faq-active' ).find( '.single-faq-answer' ).slideUp( 200 );
            element.siblings( '.single-faq.single-faq-active' ).removeClass( 'single-faq-active' ).find( 'button.tcon' ).removeClass( 'tcon-transform' );

            element.find( '.single-faq-answer' ).slideDown( 200 );
            element.addClass( 'single-faq-active' ).find( 'button.tcon' ).addClass( 'tcon-transform' );
        }

    });

   /**
    *
    * configure references slider
    *
    */

    $.martanianLuxuryApartmentsConfigureReferencesSlider = function() {

        var sliderID = 1;
        $( 'section.references' ).each( function() {

           /**
            *
            * set height for slider and additional padding
            *
            */

            var referencesSlider = $( this ).children( '.references-slider' );
            if( referencesSlider.find( '.single-reference' ).length > 1 ) referencesSlider.attr( 'data-slider-id', sliderID ).addClass( 'references-slider-active' );

            var paddingTop = parseInt( referencesSlider.find( '.single-reference' ).first().css( 'padding-top' ), 10 );
            var paddingBottom = parseInt( referencesSlider.find( '.single-reference' ).first().css( 'padding-bottom' ), 10 );
            var additionalPadding = paddingTop + paddingBottom;

           /**
            *
            * set id for single slide and show / hide each one
            *
            */

            var referenceID = 1;
            referencesSlider.find( '.single-reference' ).each( function() {

                var reference = $( this );

                if( referenceID != 1 ) reference.css({ 'display': 'none' });
                else {

                    reference.addClass( 'active' );
                    referencesSlider.css({ 'height': reference.height() + additionalPadding });
                }

                if( referencesSlider.find( '.single-reference' ).length > 1 ) reference.attr( 'data-slide-id', referenceID );

                referenceID++;

            });

           /**
            *
            * configure navigation
            *
            */

            if( referenceID > 2 ) {

                var navigation = '';
                for( var i = 1; i < referenceID; i++ ) {

                    navigation += '<li data-slide-id="'+ i +'"><span class="slider-navigation-dot '+ ( i == 1 ? 'slider-navigation-dot-active' : '' ) +'"></span></li>';
                }

                referencesSlider.append( '<ul class="slider-navigation-dots">'+ navigation +'</ul>' );
            }

           /**
            *
            * run the slider
            *
            */

            var intervalTime = referencesSlider.data( 'interval' );
            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

            if( intervalTime !== 0 ) {

                martanianLuxuryApartmentsIntervals['references-'+ sliderID] = setInterval( function() {

                    $.martanianLuxuryApartmentsSwitchReference( referencesSlider, referencesSlider.find( '.single-reference' ).length, 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

           /**
            *
            * increase slider id flag
            *
            */

            sliderID++;

           /**
            *
            * end of function.
            *
            */

        });
    };

   /**
    *
    * switch references slider
    *
    */

    $.martanianLuxuryApartmentsSwitchReference = function( slider, referencesCount, referenceID ) {

        slider.children( '.slider-navigation-dots' ).addClass( 'proceed' );
        var currentReferenceID = slider.find( '.single-reference.active' ).data( 'slide-id' );

        if( referencesCount == 'find' ) referencesCount = slider.children( '.slider-navigation-dots' ).children( 'li' ).length;
        if( referenceID == 'next' ) referenceID = currentReferenceID + 1 > referencesCount ? 1 : currentReferenceID + 1;

        slider.find( '.single-reference[data-slide-id="'+ currentReferenceID +'"]' ).fadeOut( 300 ).removeClass( 'active' ).css({ 'z-index': 500 });

        var newReferenceSlide = slider.find( '.single-reference[data-slide-id="'+ referenceID +'"]' );
        var paddingTop = parseInt( newReferenceSlide.css( 'padding-top' ), 10 );
        var paddingBottom = parseInt( newReferenceSlide.css( 'padding-bottom' ), 10 );

        slider.animate({ 'height': ( newReferenceSlide.height() + paddingTop + paddingBottom ) }, 300 );
        newReferenceSlide.addClass( 'active' ).css({ 'z-index': 1, 'display': 'block' });

        slider.children( '.slider-navigation-dots' ).children( 'li[data-slide-id="'+ currentReferenceID +'"]' ).children( '.slider-navigation-dot' ).removeClass( 'slider-navigation-dot-active' );
        slider.children( '.slider-navigation-dots' ).children( 'li[data-slide-id="'+ referenceID +'"]' ).children( '.slider-navigation-dot' ).addClass( 'slider-navigation-dot-active' );

        slider.children( '.slider-navigation-dots' ).removeClass( 'proceed' );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.references .slider-navigation-dots li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var slider = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'slider-id' );
        var referenceID = element.data( 'slide-id' );
        var sliderReferencesCount = slider.find( '.slider-navigation-dots' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.children().hasClass( 'slider-navigation-dot-active' ) && ( sliderReferencesCount > 1 ) ) {

            element.siblings( 'li' ).children( '.slider-navigation-dot' ).removeClass( 'slider-navigation-dot-active' );
            element.children( '.slider-navigation-dot' ).addClass( 'slider-navigation-dot-active' );

            clearInterval( martanianLuxuryApartmentsIntervals['references-'+ sliderID] );
            $.martanianLuxuryApartmentsSwitchReference( slider, 'find', referenceID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianLuxuryApartmentsIntervals['references-'+ sliderID] = setInterval( function() {

                        $.martanianLuxuryApartmentsSwitchReference( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

            }, 300 );
        }

    });

   /**
    *
    * function returns an image URL from background css attribute
    *
    */

    $.martanianLuxuryApartmentsGetImageURL = function( image ) {

        var backgroundURL = /^url\((['"]?)(.*)\1\)$/.exec( image );
        return( backgroundURL ? backgroundURL[2] : false );
    };

   /**
    *
    * configure images for magnific popup
    *
    */

    $.martanianLuxuryApartmentsConfigureImagesForMagnificPopup = function() {

       /**
        *
        * gallery
        *
        */

        $( 'section.gallery' ).each( function() {

            var gallery = $( this );
            gallery.find( '.gallery-single-image' ).each( function() {

                var image = $( this );
                var imageURL = $.martanianLuxuryApartmentsGetImageURL( image.css( 'background-image' ) );

                image.data( 'mfp-src', imageURL ).attr( 'data-mfp-src', imageURL );
                image.html( '<div class="gallery-single-image-caption"><div class="gallery-single-image-caption-icon"><i class="fa fa-expand"></i></div></div>' );

            });

            gallery.find( '.gallery-images' ).magnificPopup({
                delegate: '.gallery-single-image.isotope-element-visible',
                type: 'image',
                gallery: { enabled: true }
            });

        });

       /**
        *
        * end of function.
        *
        */
    };

   /**
    *
    * images slider configuration
    *
    */

    $.martanianLuxuryApartmentsConfigureImagesSlider = function() {

        var sliderID = 1;
        $( '.images' ).each( function() {

            var slider = $( this );
            var imageID = 1;
            var magnificAvailable = slider.parents( 'section.recent-news' ).length == 0 && slider.parents( 'section.sidebar' ).length == 0 && slider.parents( 'section.similar-posts' ).length == 0;

            slider.children( '.image' ).each( function() {

                var image = $( this );
                var imageURL = $.martanianLuxuryApartmentsGetImageURL( image.css( 'background-image' ) );

                image.attr( 'data-image-id', imageID );
                if( imageID != 1 ) image.css({ 'display': 'none' });

                if( magnificAvailable ) {

                    image.data( 'mfp-src', imageURL ).attr( 'data-mfp-src', imageURL );
                    image.html( '<div class="image-caption"><div class="image-caption-icon"><i class="fa fa-expand"></i></div></div>' );
                }

                imageID++;

            });

            if( slider.children( '.image' ).length > 1 ) {

                slider.attr( 'data-images-slider-id', sliderID );

                var navigation = '';
                for( var i = 1; i < imageID; i++ ) {

                    navigation += '<li data-images-slider-image-id="'+ i +'" '+ ( i == 1 ? 'class="active"' : '' ) +'><span class="circle"></span></li>';
                }

                slider.append( '<ul class="navigation">'+ navigation +'</ul>' );

                var intervalTime = slider.data( 'interval' );
                if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

                if( intervalTime !== 0 ) {

                    martanianLuxuryApartmentsIntervals['images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianLuxuryApartmentsSwitchImagesImage( slider, slider.children( '.image' ).length, 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                sliderID++;
            }

            if( magnificAvailable ) {

                slider.magnificPopup({
                    delegate: '.image',
                    type: 'image',
                    gallery: { enabled: true }
                });
            }

        });

    };

   /**
    *
    * switch images slider image
    *
    */

    $.martanianLuxuryApartmentsSwitchImagesImage = function( slider, imagesCount, imageID ) {

        var currentImageID = slider.children( '.navigation' ).children( 'li.active' ).data( 'images-slider-image-id' );

        if( imagesCount == 'find' ) imagesCount = slider.children( '.navigation' ).children( 'li' ).length;
        if( imageID == 'next' ) imageID = currentImageID + 1 > imagesCount ? 1 : currentImageID + 1;

        slider.find( '.image[data-image-id="'+ currentImageID +'"]' ).fadeOut( 300 );
        slider.find( '.image[data-image-id="'+ imageID +'"]' ).fadeIn( 300 );

        slider.children( '.navigation' ).children( 'li[data-images-slider-image-id="'+ currentImageID +'"]' ).removeClass( 'active' );
        slider.children( '.navigation' ).children( 'li[data-images-slider-image-id="'+ imageID +'"]' ).addClass( 'active' );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', '.images .navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var slider = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'images-slider-id' );
        var imageID = element.data( 'images-slider-image-id' );
        var sliderImagesCount = slider.find( '.navigation' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.hasClass( 'active' ) && ( sliderImagesCount > 1 ) ) {

            navigation.addClass( 'proceed' );

            clearInterval( martanianLuxuryApartmentsIntervals['images-slider-'+ sliderID] );
            $.martanianLuxuryApartmentsSwitchImagesImage( slider, 'find', imageID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianLuxuryApartmentsIntervals['images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianLuxuryApartmentsSwitchImagesImage( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * configure heading slider
    *
    */

    $.martanianLuxuryApartmentsConfigureHeadingSlider = function() {

        var sliderID = 1;
        $( 'section.heading-slider' ).each( function() {

           /**
            *
            * set id for slider
            *
            */

            var headingSlider = $( this );
            if( headingSlider.find( '.heading-slider-single-slide' ).length > 1 ) headingSlider.attr( 'data-slider-id', sliderID );

           /**
            *
            * set id for single slide and show / hide each one
            *
            */

            var slideID = 1;
            headingSlider.find( '.heading-slider-single-slide' ).each( function() {

                var slide = $( this );

                if( slideID != 1 ) slide.css({ 'display': 'none' });
                else slide.addClass( 'active' );

                if( headingSlider.find( '.heading-slider-single-slide' ).length > 1 ) slide.attr( 'data-slide-id', slideID );

                slideID++;

            });

           /**
            *
            * configure navigation
            *
            */

            if( slideID > 2 ) {

                var navigation = '';
                for( var i = 1; i < slideID; i++ ) {

                    navigation += '<li data-slide-id="'+ i +'"><span class="slider-navigation-dot '+ ( i == 1 ? 'slider-navigation-dot-active' : '' ) +'"></span></li>';
                }

                headingSlider.append( '<ul class="slider-navigation-dots">'+ navigation +'</ul>' );
            }

           /**
            *
            * run the slider
            *
            */

            var intervalTime = headingSlider.data( 'interval' );
            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

            if( intervalTime !== 0 ) {

                martanianLuxuryApartmentsIntervals['heading-slider-'+ sliderID] = setInterval( function() {

                    $.martanianLuxuryApartmentsSwitchHeadingSlide( headingSlider, headingSlider.find( '.heading-slider-single-slide' ).length, 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

           /**
            *
            * increase slider id flag
            *
            */

            sliderID++;

           /**
            *
            * end of function.
            *
            */

        });
    };

   /**
    *
    * switch images slider image
    *
    */

    $.martanianLuxuryApartmentsSwitchHeadingSlide = function( slider, slidesCount, slideID ) {

        slider.find( '.slider-navigation-dots' ).addClass( 'proceed' );

        var currentSlideID = slider.children( '.heading-slider-single-slide.active' ).data( 'slide-id' );
        if( slidesCount == 'find' ) slidesCount = slider.children( '.heading-slider-single-slide' ).length;

        if( slideID == 'next' ) slideID = currentSlideID + 1 > slidesCount ? 1 : currentSlideID + 1;
        else if( slideID == 'prev' ) slideID = currentSlideID - 1 == 0 ? slidesCount : currentSlideID - 1;

        slider.find( '.heading-slider-single-slide[data-slide-id="'+ slideID +'"]' ).css({ 'z-index': '1', 'display': 'block' }).addClass( 'active' );
        slider.find( '.heading-slider-single-slide[data-slide-id="'+ currentSlideID +'"]' ).css({ 'z-index': '500' }).removeClass( 'active' );

        setTimeout( function() {

            slider.find( '.heading-slider-single-slide[data-slide-id="'+ currentSlideID +'"]' ).find( 'h1, h2.like-h1, h3, p' ).addClass( 'animated animated-semi-speed fadeOutDownSmall' );
            setTimeout( function() {

                slider.find( '.heading-slider-single-slide[data-slide-id="'+ currentSlideID +'"]' ).fadeOut( 300 );
                slider.find( '.heading-slider-single-slide[data-slide-id="'+ slideID +'"]' ).find( 'h1, h2.like-h1, h3, p' ).addClass( 'animated animated-semi-speed fadeInDownSmall' );

                slider.children( '.slider-navigation-dots' ).children( 'li[data-slide-id="'+ currentSlideID +'"]' ).children( '.slider-navigation-dot' ).removeClass( 'slider-navigation-dot-active' );
                slider.children( '.slider-navigation-dots' ).children( 'li[data-slide-id="'+ slideID +'"]' ).children( '.slider-navigation-dot' ).addClass( 'slider-navigation-dot-active' );

                setTimeout( function() {

                    slider.find( '.heading-slider-single-slide' ).css({ 'z-index': '' });
                    slider.find( '.heading-slider-single-slide' ).find( 'h1, h2.like-h1, h3, p' ).removeClass( 'animated animated-semi-speed fadeInDownSmall fadeOutDownSmall' );

                    slider.find( '.slider-navigation-dots' ).removeClass( 'proceed' );

                }, 800 );

            }, 400 );

        }, 100 );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.heading-slider .slider-navigation-dots li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var slider = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'slider-id' );
        var slideID = element.data( 'slide-id' );
        var slidesCount = slider.find( '.slider-navigation-dots' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.children().hasClass( 'slider-navigation-dot-active' ) && ( slidesCount > 1 ) ) {

            element.siblings( 'li' ).children( '.slider-navigation-dot' ).removeClass( 'slider-navigation-dot-active' );
            element.children( '.slider-navigation-dot' ).addClass( 'slider-navigation-dot-active' );

            clearInterval( martanianLuxuryApartmentsIntervals['heading-slider-'+ sliderID] );
            $.martanianLuxuryApartmentsSwitchHeadingSlide( slider, 'find', slideID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianLuxuryApartmentsIntervals['heading-slider-'+ sliderID] = setInterval( function() {

                        $.martanianLuxuryApartmentsSwitchHeadingSlide( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

            }, 300 );
        }

    });

   /**
    *
    * configure property summary box
    *
    */

    $.martanianLuxuryApartmentsConfigurePropertySummaryBox = function() {

        $( 'section.property-summary' ).each( function() {

            var section = $( this );
            var iconBlockID = 1;
            var summaryContentID = 1;

            section.find( '.icon-block' ).each( function() {

                var iconBlock = $( this );

                if( iconBlockID == 1 ) iconBlock.addClass( 'active' );
                iconBlock.data( 'element-id', iconBlockID ).attr( 'data-element-id', iconBlockID );

                iconBlockID++;

            });

            section.find( '.property-summary-content' ).each( function() {

                var summaryContent = $( this );

                if( summaryContentID != 1 ) summaryContent.css({ 'display': 'none' });
                else {

                    summaryContent.addClass( 'active' );
                    summaryContent.parent().css({ 'height': summaryContent.height() });
                }

                summaryContent.data( 'element-id', summaryContentID ).attr( 'data-element-id', summaryContentID );
                summaryContentID++;

            });

        });

    };

   /**
    *
    * change summary box
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.property-summary:not(.proceed) .icon-block:not(.active)', function() {

        var iconBlock = $( this );
        var section = iconBlock.parents( 'section.property-summary' );
        var elementID = iconBlock.data( 'element-id' );

        section.addClass( 'proceed' );

        iconBlock.siblings().removeClass( 'active' );
        iconBlock.addClass( 'active' );

        section.find( '.property-summary-content.active' ).css({ 'z-index': '500' });
        section.find( '.property-summary-content[data-element-id="'+ elementID +'"]' ).fadeIn( 300 );
        section.find( '.property-summary-content.active' ).fadeOut( 300 );

        section.find( '.property-summary-content[data-element-id="'+ elementID +'"]' ).parent().animate({ 'height': section.find( '.property-summary-content[data-element-id="'+ elementID +'"]' ).height() }, 300 );

        setTimeout( function() {

            section.find( '.property-summary-content.active' ).css({ 'display': 'none', 'z-index': '' }).removeClass( 'active' );
            section.find( '.property-summary-content[data-element-id="'+ elementID +'"]' ).addClass( 'active' );

            section.removeClass( 'proceed' );

        }, 300 );

    });

   /**
    *
    * configure logos slider
    *
    */

    $.martanianLuxuryApartmentsConfigureLogosSlider = function() {

        var logosSliderID = 1;
        $( 'section.logos-slider' ).each( function() {

            var section = $( this );
            var navigation = section.find( '.logos-slider-navigation' );
            var slider = section.find( '.logos-slider' );

            navigation.html( '' );
            clearInterval( martanianLuxuryApartmentsIntervals['logos-slider-'+ logosSliderID] );
            slider.css({ 'margin-left': 0 });

            if( slider.find( '.single-logo' ).parent().hasClass( 'logos-slider-group' ) ) {

                slider.find( '.single-logo' ).unwrap().removeClass().addClass( 'single-logo' );
            }

            var logosCount = slider.children( '.single-logo' ).length;
            var contentSize = parseInt( section.find( '.logos-slider-container' ).css( 'width' ), 10 );

            switch( contentSize ) {

                case 1110: var perScreen = 6; break;
                case 910: var perScreen = 5; break;
                default: var perScreen = 4; break;
            }

            var screensCount = Math.ceil( logosCount / perScreen );

            var intervalTime = section.data( 'interval' );
            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

            var groupID = 1;
            var inGroup = 0;

            slider.children( '.single-logo' ).each( function() {

                $( this ).addClass( 'logos-slider-group-'+ groupID );
                inGroup++;

                if( inGroup == perScreen ) {

                    groupID++;
                    inGroup = 0;
                }

            });

            for( var i = 0; i < groupID; i++ ) { slider.children( '.logos-slider-group-'+ ( i + 1 ) ).wrapAll( '<div class="logos-slider-group"></div>' ); }
            if( contentSize < 690 ) {

                slider.find( '.logos-slider-group' ).css({ 'width': contentSize + 30 });
            }

            section.attr( 'data-logos-slider-id', logosSliderID );
            for( var i = 0; i < screensCount; i++ ) {

                navigation.append( '<li data-screen-id="'+ ( i + 1 ) +'"><span class="circle '+ ( i == 0 ? 'circle-active' : '' ) +'"></span></li>' );
            }

            if( screensCount > 1 && intervalTime !== 0 ) {

                martanianLuxuryApartmentsIntervals['logos-slider-'+ logosSliderID] = setInterval( function() {

                    $.martanianLuxuryApartmentsSwitchLogosSliderScreen( section, screensCount, 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

            logosSliderID++;

        });

    };

   /**
    *
    * switch logos slider screen automatically
    *
    */

    $.martanianLuxuryApartmentsSwitchLogosSliderScreen = function( section, screensCount, screenID ) {

        section.find( '.logos-slider-navigation' ).addClass( 'proceed' );

        var currentScreenID = section.find( '.logos-slider-navigation' ).find( '.circle-active' ).parent().data( 'screen-id' );
        var position = 0;
        var sectionWidth = parseInt( section.find( '.logos-slider-container' ).css( 'width' ), 10 );

        if( screensCount == 'find' ) screensCount = section.find( '.logos-slider-navigation' ).children( 'li' ).length;
        if( screenID == 'next' ) screenID = currentScreenID + 1 > screensCount ? 1 : currentScreenID + 1;

        section.find( '.logos-slider-navigation' ).children( 'li[data-screen-id="'+ currentScreenID +'"]' ).children( '.circle' ).removeClass( 'circle-active' );
        section.find( '.logos-slider-navigation' ).children( 'li[data-screen-id="'+ screenID +'"]' ).children( '.circle' ).addClass( 'circle-active' );

        if( screenID == 1 ) position = 0;
        else position = - ( ( sectionWidth * ( screenID - 1 ) ) + ( 30 * ( screenID - 1 ) ) );

        section.find( '.logos-slider' ).animate({ 'margin-left': position +'px' }, 800 );
        setTimeout( function() {

            section.find( '.logos-slider-navigation' ).removeClass( 'proceed' );

        }, 800 );

    };

   /**
    *
    * switch logos slider screen on click
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.logos-slider .logos-slider-navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var section = element.parents( 'section.logos-slider' );
        var navigation = section.find( '.logos-slider-navigation' );
        var screenID = element.data( 'screen-id' );
        var logosSliderID = section.data( 'logos-slider-id' );

        var intervalTime = section.data( 'interval' );
        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

        if( !navigation.hasClass( 'proceed' ) ) {

            clearInterval( martanianLuxuryApartmentsIntervals['logos-slider-'+ logosSliderID] );
            $.martanianLuxuryApartmentsSwitchLogosSliderScreen( section, 'find', screenID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianLuxuryApartmentsIntervals['logos-slider-'+ logosSliderID] = setInterval( function() {

                        $.martanianLuxuryApartmentsSwitchLogosSliderScreen( section, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

            }, 800 );
        }

    });

   /**
    *
    * configure selects
    *
    */

    $.martanianLuxuryApartmentsConfigureSelects = function() {

        $( 'select' ).each( function() {

            var select = $( this );
            select.wrap( '<span class="select"></span>' );

        });

    };

   /**
    *
    * configure checkbox
    *
    */

    $.martanianLuxuryApartmentsConfigureCheckbox = function() {

        $( '.checkbox-box' ).each( function() {

            var checkbox = $( this );
            var checked = checkbox.attr( 'data-checked' ) == 'yes' ? true : false;

            if( checked == true ) checkbox.children( '.checkbox-status' ).html( '<i class="fa fa-check"></i>' );
            else checkbox.children( '.checkbox-status' ).html( '' );

        });

    };

   /**
    *
    * checkbox field change
    *
    */

    $( 'body' ).on( 'click touchstart', '.checkbox-box', function( event ) {

        var target = $( event.target );
        if( target.is( 'a' ) === false ) {

            event.preventDefault();

            var checkbox = $( this );
            var checked = checkbox.attr( 'data-checked' ) == 'yes' ? true : false;

            if( checked == true ) {

                checkbox.attr( 'data-checked', 'no' ).data( 'checked', 'no' );
                checkbox.children( '.checkbox-status' ).html( '' );
            }

            else {

                checkbox.attr( 'data-checked', 'yes' ).data( 'checked', 'yes' );
                checkbox.children( '.checkbox-status' ).html( '<i class="fa fa-check"></i>' );
            }
        }

    });

   /**
    *
    * show "schedule a visit" popup
    *
    */

    $( 'body' ).on( 'click touchstart', 'button[data-action="show-form-popup"]', function() {

        var popup = $( '#form-popup' );
        if( popup.length == 0 ) return;

        var popupBackground = popup.children( '.form-popup-background' );
        var popupContent = popup.children( '.form-popup-content' );
        var popupContentHeight = popupContent.height() + 6 + parseInt( popupContent.css( 'padding-top' ), 10 ) + parseInt( popupContent.css( 'padding-bottom' ), 10 ) + 200;

        popupBackground.fadeIn( 300 );
        setTimeout( function() {

            if( $( window ).height() < popupContentHeight ) {

                popupContent.css({ 'position': 'absolute' });
                $( 'html, body' ).animate({ 'scrollTop': '0' }, 300 );
            }

            popupContent.addClass( 'bounceInDown animated' ).css({ 'display': 'block' });
            setTimeout( function() {

                popupContent.removeClass( 'bounceInDown animated' );

            }, 900 );

        }, 100 );

    });

   /**
    *
    * hide "schedule a visit" popup
    *
    */

    $( 'body' ).on( 'click touchstart', '#form-popup .form-popup-content .close-popup-icon', function() {

        var popup = $( this ).parents( '#form-popup' );
        var popupBackground = popup.children( '.form-popup-background' );
        var popupContent = popup.children( '.form-popup-content' );

        popupContent.addClass( 'bounceOutUp animated' );
        setTimeout( function() {

            popupBackground.fadeOut( 300 );
            setTimeout( function() {

                popupBackground.css({ 'display': 'none' });
                popupContent.css({ 'display': 'none', 'position': '' }).removeClass( 'bounceOutUp animated' );

            }, 400 );

        }, 600 );

    });

   /**
    *
    * configure date fields
    *
    */

    $.martanianLuxuryApartmentsConfigureDateFields = function() {

        $( 'input[type="date"]' ).each( function() {

            var field = $( this );
            field.wrap( '<span class="date-field"></span>' );

            field.parents( '.date-field' ).prepend( '<span class="date-field-icon"><i class="fa fa-calendar"></i></span>' );

        });

    };

   /**
    *
    * change menu visibility flag
    *
    */

    $.martanianLuxuryApartmentsChangeResponsiveMenuVisibilityFlag = function( visibility ) {

        martanianLuxuryApartmentsResponsiveMenuVisible = visibility;

    };

   /**
    *
    * configure responsive menu
    *
    */

    $.martanianLuxuryApartmentsConfigureResponsiveMenu = function() {

        var contentSize = parseInt( $( 'header.header-bar .header-bar-top .container' ).css( 'width' ), 10 );
        var responsiveMenuWidth = contentSize < 750 ? ( contentSize <= 370 ? 180 : 250 ) : 300;

        var headerBar = $( 'header' );
        var headerMenu = headerBar.find( 'ul.menu' );
        var headerTopBar = headerBar.children( '.header-bar-top' ).find( '.col-md-12' );

        martanianLuxuryApartmentsResponsiveMenuVisible = false;

        headerBar.css({ 'left': '0' });
        $( '.big-wrapper' ).css({ 'margin-left': '', 'width': '' });
        $( '.responsive-menu-content' ).css({ 'display': 'none', 'right': '-'+ responsiveMenuWidth +'px' });

        if( contentSize >= 970 ) $( '.responsive-menu-content' ).remove();
        else {

            if( $( '.responsive-menu-content' ).length == 0 ) {

                $( 'body' ).append( '<div class="responsive-menu-content"></div>' );
                $( '.responsive-menu-content' ).append( '<ul class="menu">'+ headerMenu.html() +'</ul>'+ headerTopBar.html() );
                $( '.responsive-menu-content' ).find( '.sub-menu' ).removeClass( 'animated animated-speed fadeInDown' );
            }
        }
    };

   /**
    *
    * show responsive menu
    *
    */

    $( 'body' ).on( 'click touchstart', '.responsive-menu-button', function( event ) {

        event.preventDefault();

        var contentSize = parseInt( $( 'header.header-bar .header-bar-top .container' ).css( 'width' ), 10 );
        var responsiveMenuWidth = contentSize < 750 ? ( contentSize <= 370 ? 180 : 250 ) : 300;

        if( martanianLuxuryApartmentsResponsiveMenuVisible == false ) {

            var wrapper = $( '.big-wrapper' );
            var wrapperWidth = wrapper.width();
            var headerBar = $( this ).parents( 'header.header-bar' );

            headerBar.animate({ 'left': '-'+ responsiveMenuWidth +'px' }, 300 );
            wrapper.animate({ 'margin-left': '-'+ responsiveMenuWidth +'px', 'width': wrapperWidth }, 300 );

            $( '.responsive-menu-content' ).css({ 'display': 'block' }).animate({ 'right': '0' }, 300 );
            martanianLuxuryApartmentsResponsiveMenuVisible = true;
        }

        else {

            var wrapper = $( '.big-wrapper' );
            var wrapperWidth = wrapper.width();
            var headerBar = $( this ).parents( 'header.header-bar' );

            headerBar.animate({ 'left': '0' }, 300 );
            wrapper.animate({ 'margin-left': '0' }, 300 );

            $( '.responsive-menu-content' ).css({ 'display': 'block' }).animate({ 'right': '-'+ responsiveMenuWidth +'px' }, 300 );

            setTimeout( function() {

                $( '.responsive-menu-content' ).css({ 'display': 'none' });
                wrapper.css({ 'margin-left': '', 'width': '' });
                headerBar.css({ 'left': '' });

            }, 300 );

            martanianLuxuryApartmentsResponsiveMenuVisible = false;
        }

    });

   /**
    *
    * is form field required?
    *
    */

    $.martanianLuxuryApartmentsIsFieldRequired = function( field ) {

        var required = field.data( 'required' );
        return( typeof required == 'undefined' || required == false || required == null || required == 'yes' ? true : false );

    };

   /**
    *
    * send form
    *
    */

    $( 'body' ).on( 'click touchstart', '.form-send', function( event ) {

        event.preventDefault();

        var form = $( this ).parents( 'form.form-active' );
        var fields = [];
        var isError = false;
        var formOptions = {
            'client-name-field': form.data( 'client-name-field' ),
            'client-email-field': form.data( 'client-email-field' ),
            'title': form.data( 'title' )
        };

        form.find( '.form-field' ).each( function() {

            var field = $.martanianLuxuryApartmentsIsFormFieldValid( $( this ) );

            if( field !== false ) fields[fields.length] = field;
            else isError = true;

        });

        if( isError == false ) {

            var thanksLay = form.children( '.thanks-lay' );
            thanksLay.fadeIn( 300 );

            $.ajax({ url: '_assets/_php/submit.php',
                     data: { 'fields': fields, 'options': formOptions },
                     type: 'post',
                     success: function( output ) {

                         var layClass = output == 'OK' ? '.thanks-lay-content-sent' : '.thanks-lay-content-not-sent';

                         thanksLay.find( '.thanks-lay-content-sending' ).css({ 'display': 'none' });
                         thanksLay.find( layClass ).fadeIn( 300 );

                     },
                     error: function( output ) {

                         thanksLay.find( '.thanks-lay-content-sending' ).css({ 'display': 'none' });
                         thanksLay.find( '.thanks-lay-content-not-sent' ).fadeIn( 300 );

                     }});
        }

    });

   /**
    *
    * is form field valid
    *
    */

    $.martanianLuxuryApartmentsIsFormFieldValid = function( field ) {

        var fieldName = field.attr( 'name' );
        var fieldValue = field.val();
        var fieldRequired = $.martanianLuxuryApartmentsIsFieldRequired( field );

        if( typeof fieldName == 'undefined' ) fieldName = field.data( 'field-name' );
        if( ( typeof fieldValue == 'undefined' || fieldValue == null || fieldValue == false || fieldValue == '' ) && !field.is( 'input[type="text"], input[type="email"], input[type="password"], input[type="url"], input[type="tel"], input[type="number"], input[type="date"], textarea' ) ) {

            if( field.hasClass( 'checkbox-box' ) ) {

                var checked = field.data( 'checked' );
                fieldValue = fieldRequired == false || ( fieldRequired == true && checked == 'yes' ) ? field.data( 'value-if-checked' ) : '';
            }
        }

        if( ( fieldRequired == true && fieldValue != '' ) || fieldRequired == false ) {

            if( field.is( 'select' ) ) field.parent().removeClass( 'error' );
            else field.removeClass( 'error' );
        }

        else {

            if( field.is( 'select' ) ) field.parent().addClass( 'error' );
            else field.addClass( 'error' );

            return false;
        }

        return( { 'name': fieldName, 'value': fieldValue } );
    };

   /**
    *
    * close thanks-lay notice
    *
    */

    $( 'body' ).on( 'click touchstart', '.thanks-lay-close', function( event ) {

        event.preventDefault();

        var thanksLay = $( this ).parents( '.thanks-lay' );
        thanksLay.fadeOut( 300 );

        setTimeout( function() {

            thanksLay.find( '.thanks-lay-content-sent' ).css({ 'display': 'none' });
            thanksLay.find( '.thanks-lay-content-not-sent' ).css({ 'display': 'none' });

        }, 300 );

    });

   /**
    *
    * end of file.
    *
    */

});