$(".btn1").on("click", function() {
    $("body").addClass("background-btn1");
    $(".container").addClass("container-remove");

    setTimeout(function() {
        $("body").removeClass("background-btn1");
        $(".container").removeClass("container-remove");
    }, 1000);
});

$(".btn2").on("click", function() {
    $("body").addClass("background-btn2");
    $(".container").addClass("container-remove");

    setTimeout(function() {
        $("body").removeClass("background-btn2");
        $(".container").removeClass("container-remove");
    }, 1000);
});

$(".btn3").on("click", function() {
    $("body").addClass("background-btn3");
    $(".container").addClass("container-remove");

    setTimeout(function() {
        $("body").removeClass("background-btn3");
        $(".container").removeClass("container-remove");
    }, 1000);
});

$(".btn4").on("click", function() {
    $("body").addClass("background-btn4");
    $(".container").addClass("container-remove");

    setTimeout(function() {
        $("body").removeClass("background-btn4");
        $(".container").removeClass("container-remove");
    }, 1000);
});