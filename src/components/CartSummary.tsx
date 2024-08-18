import { toast } from "sonner";

const CartSummary = ({ cart }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal > 100 ? 10 : 0; // Example discount
  const total = subtotal - discount;

  return (
    <div id="summary" className=" w-full lg:w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">
          Items {cart.length}{" "}
        </span>
        <span className="font-semibold text-sm">$ {Math.floor(subtotal)} </span>
      </div>

      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <div className="  rounded flex ">
          <input
            type="text"
            id="promo"
            onChange={(e) => console.log(e.target.value)}
            value={"DISCOUNT10"}
            placeholder="Enter your code"
            className="p-2 text-sm w-full border-2 border-stone-500	 "
          />
          <button className="bg-black hover:bg-gray-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
        </div>
        <small className="text-red-500 ">
          {" "}
          Promo code: DISCOUNT10 applied{" "}
        </small>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>$ {Math.floor(total)}</span>
        </div>
        <button
          className="bg-blue-500 font-semibold hover:bg-blue-600 py-3 text-sm text-white uppercase w-full"
          onClick={() => toast.success("Thank you for shopping with us!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
