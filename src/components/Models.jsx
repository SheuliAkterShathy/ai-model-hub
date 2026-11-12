import { use } from "react";
import ModelCard from "./ModelCard";

function Models({ modelPromise,carts, setCarts }) {
  const models = use(modelPromise);

  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose your AI Models</h2>
        <p>One subscription gives you access to all frontier AI</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {models.map((model) => (
         <ModelCard  key={model.id} model={model} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
}

export default Models;
