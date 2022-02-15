let upi = document.getElementById("upi")


items_cart = [];
all_items = localStorage.getItem("all_items");

checkout_summery_loader()

function checkout_summery_loader() {
    create_setup()
    form_summery.innerHTML =
        `
    <div class="form_summer_title">
                        SUMMERY
    </div>
    <div class="form_summer_products" id="form_summer_products">
        
    </div>
    <div class="form_summer_total">
        <div class="form_summer_total_name">
            TOTAL
        </div>
        <div class="form_summer_total_num">
            ₹${count_total()}
        </div>
    </div>
    <div class="form_summer_total">
        <div class="form_summer_total_name">
            SHIPPING
        </div>
        <div class="form_summer_total_num">
            $ 50
        </div>
    </div>
    <div class="form_summer_grandtotal">
        <div class="form_summer_grandtotal_name">
            GRAND TOTAL
        </div>
        <div class="form_summer_grandtotal_num">
            ₹${count_total() + 50}
        </div>
    </div>
    <input type="submit" value="CONTINUE & PAY" class="form_summer_btn" id="form_summer_btn">
<!--        CONTINUE & PAY
    </input>-->
    `

    for (const e of items_cart) {
        form_summer_products.innerHTML += `
        <div class="form_summer_products_item">
            <div class="form_summer_products_item_img_info">
                <div class="form_summer_products_item_img">
                    <img src="${e.img}" alt="">
                </div>
                <div class="form_summer_products_item_name_price">
                    <div class="form_summer_products_item_name">
                    ${e.title}
                    </div>
                    <div class="form_summer_products_item_price">
                    ${e.price}
                    </div>
                </div>
            </div>
            <div class="form_summer_products_item_quantity">
                x${e.quantity}
            </div>
        </div>`
    }

    if (count_total() >= 1) {
        form_summer_btn.style.cursor = "pointer"
        form_summer_btn.style.background = "#D87D4A"
    } else {
        // form_summer_btn.style.pointerEvents="none"
        form_summer_btn.style.cursor = "not-allowed"
        form_summer_btn.style.background = "#d87e4a89"
    }
}

function getValue(radio) {
    if (radio.value == "upi") {
        form_checkout_billing_namefield_long_output.innerHTML = `
        <div class="form_checkout_billing_namefield right_margin_20">
            <div class="form_checkout_billing_namefield_name_error">
                <div class="form_checkout_billing_namefield_name">
                    UPI Number
                </div>
                <div class="form_checkout_billing_namefield_error">
                    Field can not be empty
                </div>
            </div>
            <input type="text" class="form_checkout_billing_namefield_input" placeholder="Jhondoe@gpay21">
        </div>
        <div class="form_checkout_billing_namefield right_margin_20">
            <div class="form_checkout_billing_namefield_name_error">
                <div class="form_checkout_billing_namefield_name">
                    UPI PIN
                </div>
                <div class="form_checkout_billing_namefield_error">
                    Field can not be empty
                </div>
            </div>
            <input type="text" class="form_checkout_billing_namefield_input" placeholder="876055">
        </div>
        `
    } else if (radio.value == "cod") {
        form_checkout_billing_namefield_long_output.innerHTML = `
        <div class="form_checkout_billing_namefield_long_output_img_text">
            <div class="form_checkout_billing_namefield_long_output_img">
                <img src="/images/checkout/icon-cash-on-delivery.svg" alt="">
            </div>
            <div class="form_checkout_billing_namefield_long_output_text">
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                courier arrives at your residence. Just make sure your address is correct so
                that your order will not be cancelled.
            </div>
        </div>
        `
    }
}

function check_email_main_items_box_other() {
    check_email_main_items_box.innerHTML = ``;
    for (const e of items_cart) {
        check_email_main_items_box.innerHTML += `
        <div class="form_summer_products_item">
            <div class="form_summer_products_item_img_info">
                <div class="form_summer_products_item_img">
                    <img src="${e.img}" alt="">
                </div>
                <div class="form_summer_products_item_name_price">
                    <div class="form_summer_products_item_name">
                    ${e.title}
                    </div>
                    <div class="form_summer_products_item_price">
                    ${e.price}
                    </div>
                </div>
            </div>
            <div class="form_summer_products_item_quantity">
                x${e.quantity}
            </div>
        </div>
        `
    }
    check_email_main_items_box.innerHTML += `
    <div class="check_email_main_items_box_other" onclick="check_email_page_loader()">
            View less
        </div>
    `
}

function check_email_page_loader() {

    document.body.style.overflow = "hidden"
    check_email.style.display = "flex";
    check_email.innerHTML =
        `
        <div class="check_email_main" >
            <div class="check_email_main_img">
                <img src="/images/shared/desktop/icon-check-mark.svg" alt="">
            </div>
            <div class="check_email_main_thanks">
                THANK YOU<br>
                FOR YOUR ORDER
            </div>
            <div class="check_email_main_email">
                You will receive an email confirmation shortly.
            </div>
            <div class="check_email_main_items_total_box">
                <div class="check_email_main_items_box" id="check_email_main_items_box">
                    
                </div>
                <div class="check_email_main_total_box">
                    <div class="check_email_main_total_box_name">
                        GRAND TOTAL
                    </div>
                    <div class="check_email_main_total_box_num">
                    ₹${count_total() + 50}
                    </div>
                </div>
            </div>
            <div class="check_email_main_back_btn" onclick="check_email_main_back_btn()">
                BACK TO HOME
            </div>
        </div>
    `

    check_email_main_items_box.innerHTML = `
    <div class="form_summer_products_item">
        <div class="form_summer_products_item_img_info">
            <div class="form_summer_products_item_img">
                <img src="${items_cart[0].img}" alt="">
            </div>
            <div class="form_summer_products_item_name_price">
                <div class="form_summer_products_item_name">
                ${items_cart[0].title}
                </div>
                <div class="form_summer_products_item_price">
                ${items_cart[0].price}
                </div>
            </div>
        </div>
        <div class="form_summer_products_item_quantity">
            x${items_cart[0].quantity}
        </div>
    </div>
    `
    if (items_cart.length > 1) {
        check_email_main_items_box.innerHTML += `
        <div class="check_email_main_items_box_other" onclick="check_email_main_items_box_other()">
            and ${items_cart.length - 1} other item(s)
        </div>
        `
    }

}

function check_email_main_back_btn() {
    create_setup()
    localStorage.clear()
    items_cart = [];
    form.reset()
    header_cart_loader();
    checkout_summery_loader()
    document.location.href = '../../'
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    create_setup()
    check_email_page_loader()
})
