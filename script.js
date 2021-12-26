$(document).ready(function () {
    $("#report-weekly").addClass("activated");
    $("#report-daily").removeClass("activated");
    $("#report-monthly").removeClass("activated");
    $(".weekly.report-container").addClass("visible container");
    $(".daily.report-container").removeClass("visible container");
    $(".monthly.report-container").removeClass("visible container");
})

$("#report-daily").click(function () {
    $("#report-daily").addClass("activated");
    $("#report-weekly").removeClass("activated");
    $("#report-monthly").removeClass("activated");
    $(".daily.report-container").addClass("visible container");
    $(".weekly.report-container").removeClass("visible container");
    $(".monthly.report-container").removeClass("visible container");
})

$("#report-weekly").click(function () {
    $("#report-weekly").addClass("activated");
    $("#report-daily").removeClass("activated");
    $("#report-monthly").removeClass("activated");
    $(".weekly.report-container").addClass("visible container");
    $(".daily.report-container").removeClass("visible container");
    $(".monthly.report-container").removeClass("visible container");
})

$("#report-monthly").click(function () {
    $("#report-monthly").addClass("activated");
    $("#report-daily").removeClass("activated");
    $("#report-weekly").removeClass("activated");
    $(".monthly.report-container").addClass("visible container");
    $(".daily.report-container").removeClass("visible container");
    $(".weekly.report-container").removeClass("visible container");
})