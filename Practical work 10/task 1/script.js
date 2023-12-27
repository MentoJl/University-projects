$(document).ready(function () {
    loadData();
});

$("#myForm").on("input change", "input, textarea, select", function () {
    saveData();
});

$(window).on("beforeunload", function () {
    saveData();
});

function saveData() {
    var form = $("#myForm");

    form.find("input, textarea, select").each(function () {
        var id = $(this).attr("id");
        var value;

        if ($(this).is(":checkbox"))
            value = $(this).prop("checked");
        else
            if ($(this).is(":radio"))
                value = $(this).prop("checked");
            else
                value = $(this).val();

        localStorage.setItem(id, value);
    });
}

function loadData() {
    var form = $("#myForm");

    form.find("input, textarea, select").each(function () {
        var id = $(this).attr("id");
        var savedValue = localStorage.getItem(id);

        if (savedValue !== null) {
            if ($(this).is(":checkbox"))
                $(this).prop("checked", savedValue === "true");
            else
                if ($(this).is(":radio"))
                    $(this).prop("checked", savedValue === "true");
                else
                    $(this).val(savedValue);
        }
    });
}