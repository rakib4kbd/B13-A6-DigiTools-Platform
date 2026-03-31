import { Check } from "lucide-react";
import { use } from "react";

const ProductGrid = ({ toolsPromise, cartItems, setCartItems }) => {
  const tools = use(toolsPromise);

  const handleAdd = (tool) => {
    if (!cartItems.includes(tool)) {
      setCartItems([...cartItems, tool]);
    }
  };

  return (
    <>
      {tools.map((tool, index) => (
        <div
          className="card bg-base-100 border rounded-2xl border-gray-200 hover:border-neutral hover:shadow-xl transition duration-300 ease-in-out"
          key={index}
        >
          <div className="card-body">
            <div className="w-15 h-15 flex items-center justify-center">
              <img src={tool.img} alt="" />
              <span className="badge badge-base rounded-full badge-warning absolute top-2 right-2">
                {tool.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold">{tool.title}</h2>
            <p className="text-gray-500 text-base">{tool.description}</p>
            <div className="flex items-baseline">
              <span className="font-bold text-xl">${tool.price}</span>
              <span className="text-gray-500">/{tool.billingCycle}</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-gray-500">
              {tool.features.map((feature, childKey) => (
                <li key={childKey}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <button
                className={`btn btn-primary btn-block rounded-full transition duration-500 ease-in-out ${cartItems.includes(tool) ? "bg-green-700" : "bg-linear-primary"}`}
                onClick={() => {
                  handleAdd(tool);
                }}
              >
                {cartItems.includes(tool) ? (
                  <p className="flex items-center justify-center ">
                    <span>
                      <Check className="text-xs" />
                    </span>
                    Added To Cart
                  </p>
                ) : (
                  "Buy Now"
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductGrid;
