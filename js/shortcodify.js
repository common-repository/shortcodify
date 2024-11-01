jQuery(function() {
    if(typeof jQuery().accordion != 'undefined'){
        jQuery( ".sc_accordion.autoheight" ).accordion();
        jQuery( ".sc_accordion.collapsible" ).accordion({
            collapsible: true
        });
        jQuery( ".sc_accordion.no-auto" ).accordion({
            heightStyle: "content"
        });
    }

    if(typeof jQuery().tabs != 'undefined'){
        jQuery( ".sc_tabs.std" ).tabs();
    }
});