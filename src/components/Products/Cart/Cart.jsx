import CartItem from "./CartItem/CartItem";

const Cart = ({ selectedProductBtn, cartItems, setCartItems }) => {
  const priceList = cartItems.map((item) => item.price);
  const totalPrice = priceList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <>
      {selectedProductBtn === "cart" && (
        <div className="container mx-auto border rounded-2xl border-gray-200">
          <div className="p-5">
            <h1 className="font-bold mb-3">Your Cart</h1>
            {cartItems.length > 0 ? (
              <div>
                <CartItem cartItems={cartItems} setCartItems={setCartItems} />
                <div className="flex items-center justify-between p-2">
                  <p className="text-sm text-gray-500">Total:</p>
                  <h1 className="font-semibold">${totalPrice}</h1>
                </div>
                <button
                  onClick={() => {
                    handleCheckout();
                  }}
                  className="btn rounded-full bg-linear-primary text-white w-full"
                >
                  Proceed To Checkout
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Your cart is empty.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
