function isFilled(field) {
    var e = validator.isEmpty(validator.trim(field.val()));
    if (e) {
        field.css('border-color', 'red')
    }

    return !e;
}

function getDetails() {
    var info = {
        orderDate: $("#today").val(),
        userPayment: $("#payment").val(),
        location: $("#inputAddress").val(),
        contactNo: validator.trim($("#orderContact").text())
    }

    return info
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().substr(0, 10);
}

$(document).ready(function() {
    var today = new Date().toISOString().substr(0, 10);
    $("#today").val(today)
    $("#today").attr("min", today)
    $("#today").attr("max", addDays(today, 7))


    $("#placeOrder").on('click', function() {
        $("input:invalid").css('border-color', 'red')
        $("input:valid").css('border-color', 'lightgray')

        var p = document.getElementById("payment")
        var d = document.getElementById("today")
        var contact = validator.isEmpty(validator.trim($("#orderContact").text())) ||
            $("#orderContact").css('color') == 'red';

        if (contact) {
            $("#orderContact").text("Please input a contact number")
            $("#orderContact").css('color', 'red');
        }

        if (isFilled($("#inputAddress")) && !contact && isFilled($("#payment")) &&
            p.checkValidity() && d.checkValidity()) {
            $("#staticBackdrop").modal('toggle');

            $.post('/submitOrder', getDetails(), function(result) {});
        }
    })

    $("#return-home-btn").on('click', function() {
        window.location = "/";
    })

    $("#editnumbtn").on('click', function() {
        var n = document.getElementById("inputnum")

        if (isFilled($("#inputnum")) && n.checkValidity() &&
            validator.isLength($("#inputnum").val(), {
                min: 11,
                max: 11
            })) {
            $("#orderContact").text($("#inputnum").val())
            $("#orderContact").css('color', 'black')
            $("#orderplaced").modal('toggle')
        } else
            $("#inputnum").css('border-color', 'red')
    })
})