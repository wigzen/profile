const CartItem = ({ item, removeItem, updateQuantity }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 object-cover"
      />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p>${item.price.toFixed(2)}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 text-center border rounded"
        />
      </div>
      <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
