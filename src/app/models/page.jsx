import next from "next";
import React from "react";

const ModelPage = async () => {
  const res = await fetch("http://localhost:8000/models", {
    next: { revalidate: 20 },
  });
  //   {//     cache: "no-cache"}
  const models = await res.json();
  //   const mode = models.models;
  console.log(models);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Model Page</h1>
      <div className="grid grid-cols-3 gap-4 m-5">
        {models.map((model) => (
          <div className="border-2 text-center rounded-2xl" key={model.id}>
            {" "}
            <h1 className="font-blod text-3xl">{model.title}</h1>{" "}
            <p>{model.description}</p>
            <p className="text-green-700 font-bold text-2xl">$ {model.price}</p>
            <img src={model.image} width="250px" height="250px" alt="random" />
            <p>{model.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPage;
