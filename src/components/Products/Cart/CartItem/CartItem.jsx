import { ToastContainer, toast, Bounce } from "react-toastify";

const CartItem = ({ cartItems, setCartItems }) => {
  const handleRemove = (item) => {
    const filteredCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(filteredCart);
    toast.warning(`${item.title} removed from cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      {cartItems.map((item, index) => (
        <div
          className="flex bg-base-300 items-center justify-between gap-3 p-3 rounded-lg"
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
