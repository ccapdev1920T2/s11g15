function appendProduct(menuID, menuImg, menuPrice, menuName) {
    var v = document.getElementById(menuID + "-input-quantity");
        if(v.checkValidity()){
        var quantity = parseInt($("#" + menuID + "-input-quantity").val());
        var total = (parseInt(quantity) * parseFloat(menuPrice)).toFixed(2);
 
        if ($("#cart-item-" + menuID + ".cart-show").length) {

        var q = parseInt(validator.trim($("#" + menuID + "-quantity").text())) + parseInt(quantity);

        $("#" + menuID + "-quantity").text(q);
        $("#" + menuID + "-total").text(parseFloat(q * parseFloat(menuPrice)).toFixed(2))
        } else {
            var cartItem = $("#cart-item-" + menuID + ".cart-hide")
            cartItem.removeClass('cart-hide')
            cartItem.addClass('cart-show')

            $("#" + menuID + "-quantity").text(quantity);
            $("#" + menuID + "-total").text(total);

        }

        $("#" + menuID).css("display", "none");
        $("#" + menuID + "-input-quantity").css('border-color', 'lightgray');
    }
    else {
        $("#" + menuID + "-input-quantity").css('border-color', 'red');
    }
 
}

function showMenuModal(menuID) {
    var popup = document.getElementById(menuID);

    popup.style.display = "block";

}

function closeMenuModal(menuID) {
    var popup = document.getElementById(menuID);
    var span = document.getElementsByClassName("close")[0];

    popup.style.display = "none";
}

function deleteItem(menuID) {
    $('#cart-item-' + menuID + ".from-cart").remove();
    $('#cart-item-' + menuID + ".from-menu").removeClass("cart-show");
    $('#cart-item-' + menuID + ".from-menu").addClass("cart-hide"); {
        $.ajax({
            url: '/delete-from-cart',
            method: 'DELETE',
            data: {
                menuID: menuID
            }
        })
    };

    if (!$(".cart-show").length) {
        $(".cart-message").removeClass("cart-hide")
        $(".checkout-button").prop("disabled", true)
    }

}

/*====================POPUPS FOR RESTAURANT DETAILS=====================*/

$(document).ready(function() {

    var ratingPopup = document.getElementById("rating-popup");

    var ratingSpan = document.getElementsByClassName("rating-close")[0];

    $(".give-rating").on('click', function() {
        ratingPopup.style.display = "block";
    });

    $(".submit-rating").on('click', function() {
        $("#rateform").submit();
        $("#ratediv").html('<h4 class="text-center"><br>We have received your feedback.<br>Thank you!</h6>')
    })

    ratingSpan.onclick = function() {
        ratingPopup.style.display = "none";
    }

    //cart popup
    var cartPopup = document.getElementById("cart-popup");
    var cartSpan = document.getElementsByClassName("cart-close")[0];

    $(".btn-float").on('click', function() {
        cartPopup.style.display = "block";
    });
    cartSpan.onclick = function() {
        cartPopup.style.display = "none";
    }

    $(".checkout-button").on('click', function() {
        window.open("/checkout", '_self');
    });

    $(".btn-float").on('click', function() {
        if ($(".cart-show").length > 0) {
            $(".cart-message").addClass("cart-hide")
            $(".checkout-button").prop("disabled", false)
        } else {
            $(".cart-message").removeClass("cart-hide")
            $(".checkout-button").prop("disabled", true)
        }
    })
})