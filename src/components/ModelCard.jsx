import { useState } from "react";
import { toast } from "react-toastify";

function ModelCard({ model, carts, setCarts }) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed(true);
    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) {
      toast.error("Item already in a cart");
      return;
    }

    setCarts([...carts, model]);
    toast.success("item added to cart successfully");
  };
  return (
    <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        <img className="h-40 w-40 object-contain" src={model.image} alt="" />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">${model.price}/month</div>
        <button
          onClick={handleSubscription}
          className="btn bg-red-500 text-white w-full rounded-lg mt-5"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
}

export default ModelCard;
