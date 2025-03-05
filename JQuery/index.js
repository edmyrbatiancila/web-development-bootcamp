const numberOfImages = document.querySelectorAll(".pictures").length;

for(let i = 1; i < numberOfImages; i++) {
    $(`.image${i}`).on("click", function() {
        $(".content").addClass(`background-btn${i}`);
    });
}

$(".pictures").on("click", function() {

});


$("input").keypress(function(event) {
    $(".text-input").text(event.key);
})