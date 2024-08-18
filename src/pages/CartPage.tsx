import { useCart } from "../context/CartContext";
import CartItem from "../components/layout/cart/CartItem";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });
  };

  console.log(state.cart);

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex  my-10 flex-col  lg:flex-row ">
          <div className=" bg-white px-10 py-10 w-full lg:w-3/5">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {" "}
                {state.cart.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {state.cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>

          <CartSummary {...state} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
