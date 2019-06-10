jQuery(document).ready(function ($) {
    
    $.get("questions01.json", function (datajson) {
        console.log(datajson);
        var itemList = datajson;//JSON.parse(datajson);
        
    
        $.get("questions_list.html", function (data) {
            var divName = $_GET("div");
            var ht = ejs.render(data, { itemList: itemList, divName: divName });
            
            $('#listform').html(ht);
            $('[name="listItem"]').click(function (event) {
                
                //alert(this);
            });
        });
    
    });

    
    

});

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}