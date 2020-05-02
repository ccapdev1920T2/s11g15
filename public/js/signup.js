$(document).ready(function() {
    function isFilled() {
        var valid = true
        var fname = validator.trim($('#fname').val());
        var lname = validator.trim($('#lname').val());
        var email = validator.trim($('#emailnew').val());
        var pw = validator.trim($('#passnew').val());
        var cpw = validator.trim($('#cpassnew').val());

        if (validator.isEmpty(fname)) {
            $("#fname").css("border-color", "red");
            valid = false
        }

        if (validator.isEmpty(lname)) {
            $("#lname").css("border-color", "red");
            valid = false
        }

        if (validator.isEmpty(email)) {
            $("#emailnew").css("border-color", "red");
            valid = false
        }

        if (validator.isEmpty(pw)) {
            $("#passnew").css("border-color", "red");
            valid = false
        }

        if (validator.isEmpty(cpw)) {
            $("#cpassnew").css("border-color", "red");
            valid = false
        }

        return valid;
    }

    function checkEmail() {
        var email = validator.trim($('#emailnew').val());
        var e = document.getElementById("emailnew");

        if (!e.checkValidity()) {
            $("#signuperror").text('Please enter a valid e-mail address.')
            $('#emailnew').css('border-color', 'red');
            return false
        }

        return true
    }

    function checkPassword() {
        var pw = validator.trim($('#passnew').val());
        var cpw = validator.trim($('#cpassnew').val());
        var isValidLength = validator.isLength(pw, {
            min: 6
        });

        if (pw == cpw) {
            if (isValidLength) {
                return true
            } else {
                $("#signuperror").text("Password should be 6+ characters.")
            }
        } else {
            $("#signuperror").text("Passwords don't match.")
        }

        $('#passnew').css('borderColor', 'red')
        $('#cpassnew').css('borderColor', 'red')

        return false
    }

    $('#emailnew').keyup(function() {
        var email = $('#emailnew').val();

        $.get('/checkEmail', {
            email: email
        }, function(result) {

            if (result.email == email) {
                $('#emailnew').css('border-color', 'red');
                $('#signuperror').text('E-mail address already in use.');
                $('#signupbtn').prop('disabled', true);
            } else {
                $('#emailnew').css('border-color', '#E3E3E3');
                $('#signuperror').text('');
                $('#signupbtn').prop('disabled', false);
            }
        });
    });

    $("#signupbtn").on("click", function(event) {
        event.preventDefault();
        var f = document.getElementById("fname");
        var l = document.getElementById("lname");
        var e = document.getElementById("emailnew");
        var p = document.getElementById("passnew");
        var c = document.getElementById("cpassnew");

        $("#signuperror").text("");
        $("#signupform input:valid").css("border-color", "lightgray");

        if (!isFilled()) {
            $("#signuperror").text("Please properly fill out all fields.");
        } else {
            if (checkEmail() && checkPassword()) {
                $('#signupform').submit();
                $(".modal-message-text").text("Please check your e-mail to verify your account.")

                setTimeout(function() {
                    $("#signupmodal").modal("toggle")
                    $("#modal-message").modal('toggle')
                }, 50);

            }
        }

    });
});