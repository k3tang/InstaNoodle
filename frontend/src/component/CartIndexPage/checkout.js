
const Checkout = () => {

    const closeModal = () => {
        let ele = document.getElementById("checkout-modal");
        console.log(ele, "ele")
        ele.style.display = "none";
        let bg = document.getElementById("cart-modal-background");
        bg.style.display = "none";
    }

    return (
        <>
            <div id="close-checkout-modal" className="fa-solid fa-x" onClick={closeModal}></div>
            <h1 id="checkout-title">PEACE, LOVE AND NOODLES.</h1>
            <h2 id="checkout-text"> Thank you for your purchase! We hope these little pots of noodles put a big smile on your face.</h2>

        </>
    )
}

export default Checkout;