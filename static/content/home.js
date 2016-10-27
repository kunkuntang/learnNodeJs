$(function(){
	var html;

	var initPage = function() {

		// Load the HTML template
		$.get("/templates/home.html", function(d){
            tmpl = d;
        });

		// When AJAX calls are complete parse the template 
        // replacing mustache tags with vars
        $(document).ajaxStop(function () {
            $("body").html( tmpl );
        });

	}();
})