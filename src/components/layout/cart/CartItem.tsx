const CartItem = ({ item, removeItem, updateQuantity }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5  ">
        <div className="w-20">
          <img className="h-24" src={item.image} alt={item.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-semibold text-sm">{item.title}</span>
          <span className="text-red-500 text-xs">{item.category}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          pattern="[0-9]"
          name="counter"
          min={1}
          onChange={(e) => {
            if (isNaN(parseInt(e.target.value))) return;
            console.log(e.target.value, parseInt(e.target.value));
            updateQuantity(item.id, parseInt(e.target.value) ?? 0);
          }}
          value={item.quantity}
        />

        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        $ {item.price * item.quantity}
      </span>
    </div>
  );
};

export default CartItem;
