const numberOfImages = $(".pictures").length;

// $('.images')

for(let i = 1; i <= numberOfImages; i++) {
    $(`.image${i}`).on("click", function() {
        const imgSrc = $(this).attr("src");

        console.log("clicked image: ", imgSrc);
        $("body").removeClass(function (index, className) {
            return (className.match(/(^|\s)background-btn\d+/g) || []).join(" ");
        });

        $(".pictures").removeClass("picture-selected");
        
        $(this).addClass("picture-selected");

        $("body").addClass(`background-btn${i}`);
        $("header h1").text("Example");
    });
}


$("input").keypress(function(event) {
    $(".text-input").text(event.key);
})