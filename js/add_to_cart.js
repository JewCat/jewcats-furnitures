$(document).ready(function() {  
    function getIndexFromURL(url, index) {
        var id = '';
        for(var i = parseInt(url.indexOf(index)) + index.length + 1; i < url.length; i++) {
            if(url[i] != '&') id += url[i];
            else break;
        }
        return id;
    }

    function isAvailablePro(object, proid) {
        var flag = false;
        for(var i in object) {
            if(object[i].id == proid) {
                flag = true;
                break;
            }
        }

        return flag;
    }

    function successSwal() {
        swal({
            title : "( ˶˘ ³˘(˵ ͡° ͜ʖ ͡°˵)♡", 
            text : "This product has been sent to your cart" , 
            icon : "success",
            button: "Okk!" ,
        });
    }

    function errorSwal() {
        swal({
            title : "( ˶˘ ³˘(˵ ͡° ͜ʖ ͡°˵)♡", 
            text : "You'd added this product to cart" , 
            icon : "error",
            button: "Ok" ,
        });
    }

    $("#eat-me-sempai").click(function() {
        // GET AVAILABLE DATA || CREATE NEW CART LIST
        if(sessionStorage.cart) {
            cart_list = JSON.parse(sessionStorage.getItem('cart'));

            // IF not AVAILABLE PRODUCT -> ADD NEW PRODUCT else WARNING
            if(!isAvailablePro(cart_list, getIndexFromURL($(location).attr('href'), 'id'))) {
                var product = new Object();
                product.id = getIndexFromURL($(location).attr('href'), 'id');
                product.quantity = 1;
    
                cart_list.push(product);
                successSwal();
            }
            else {
                errorSwal();
            }
        }
        else {
            cart_list = [];
            var product = new Object();
            product.id = getIndexFromURL($(location).attr('href'), 'id');
            product.quantity = 1;

            cart_list.push(product);
            successSwal();
        }

        
        
            
        // -> SESSION STORAGE
        
        sessionStorage.setItem('cart', JSON.stringify(cart_list));
        

        
        
        
    });

});