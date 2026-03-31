const CartItem = ({ cartItems, setCartItems }) => {
  const handleRemove = (item) => {
    const filteredCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(filteredCart);
  };
  return (
    <>
      {cartItems.map((item, index) => (
        <div
          className="flex bg-base-200 items-center justify-between gap-3 p-3"
          key={index}
        >
          <img src={item.img} alt="" />
          <div className="me-auto flex flex-col justify-center" key={item.id}>
            <h1 className="font-semibold text-sm">{item.title}</h1>
            <p className="text-gray-500 text-sm font-semibold">${item.price}</p>
          </div>
          <button
            className="btn btn-ghost btn-sm btn-error"
            onClick={() => {
              handleRemove(item);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItem;
