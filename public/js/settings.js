$(document).ready(function() {
    function isEmpty(field) {
        return validator.isEmpty(validator.trim(field));
    }

    $('#submitinfo').on("click", function() {
        var adr = $("#inputadr").val();
        var num = $("#inputnum").val();
        var good = true;

        if (isEmpty(num) || !validator.isLength($("#inputnum").val(), {
                min: 11,
                max: 11
            })) {
            $("#inputnum").css("border-color", "red")
            good = false;
        } else {
            $("#inputnum").css("border-color", "lightgray")
        }

        if (isEmpty(adr)) {
            $("#inputadr").css("border-color", "red")
            good = false;
        } else {
            $("#inputadr").css("border-color", "lightgray")
        }

        if (good) {
            $("#editform").submit();
            setTimeout(function() {
                window.location.reload();
            }, 200);
        }

    });

})