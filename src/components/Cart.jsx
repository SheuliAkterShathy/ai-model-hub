import { toast } from "react-toastify";

function Cart({ carts, setCarts }) {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
     toast.success("Payment Successfull!")
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.info("Item deleted!")
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Carts</h1>

      {carts.length === 0 ? (
        <p className="text-center text-3xl font-semibold p-10">
          Your cart is empty
        </p>
      ) : (
        <>
          {" "}
          <div className="space-y-3 mt-5">
            {carts.map((item) => (
              <div
                className="flex justify-between items-center border rouded-lg p-6"
                key={item.id}
              >
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="text-3xl font-bold">${item.price}/month</div>

                  <button
                    onClick={() => handleDelete(item)}
                    className="btn rounded-full btn-error font-bold"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-black text-white p-5 mt-5 text-3xl  font-bold">
            <div>Total</div>
            <div>${totalPrice}/month</div>
          </div>
          <button
            onClick={handlePayment}
            className="w-full mt-5 bg-red-500 text-white text-2xl font-bold rounded-lg p-5 cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
