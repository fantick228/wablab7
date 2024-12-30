$(document).ready(function() {
    // Ініціалізація Accordion
    $("#accordion").accordion();

    // Ініціалізація Datepicker
    $("#datepicker").datepicker();

    // Ініціалізація Tabs
    $("#tabs").tabs();

    // Ініціалізація Fancybox
    $("[data-fancybox='videos']").fancybox({
        buttons: [
            "zoom",
            "share",
            "close"
        ]
    });
});
