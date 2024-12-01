// Ensure jQuery is loaded in your project
$(document).ready(function() {
    $("nav a").hover(
        function() { $(this).css("color", "#e76f51"); },
        function() { $(this).css("color", "white"); }
    );
});
