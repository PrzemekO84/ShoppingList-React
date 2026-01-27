import { useState } from "react";
import WeightInput from "./WeightInput";
import type { WeightInfo, ProductInfo } from "../../Types";

type PropsElements = {
    productInfo: ProductInfo,
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>,
    weightInfo: WeightInfo
    setWeightInfo: React.Dispatch<React.SetStateAction<WeightInfo>>
}

function NewProductInput(props: PropsElements) {

    function updateProduct(event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      {
        props.setProductInfo((prevInfo) => {
          return {
            ...prevInfo,
            [name]: value,
          };
        });
      }
    }
  return (
    <div className="border-3 border-purple-800 rounded-xl p-5 shadow-md/25 shadow-white">
      <h2 className="text-3xl text-center">
        Add the product and quantity or weight
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex flex-col gap-2">
          <label className="text-2xl" htmlFor="">
            Product <span className="text-red-500">*</span>
          </label>
          <input
            required={true}
            onChange={updateProduct}
            name="productName"
            className="bg-stone-200 rounded-md p-2 text-black"
            type="text"
            placeholder="Ex. Apple"
            value={props.productInfo.productName}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-2xl" htmlFor="">
            Quantity
          </label>
          <input
            onChange={updateProduct}
            name="productQuantity"
            className="bg-stone-200 rounded-md p-2 text-black"
            type="number"
            min={0}
            max={1000}
            placeholder="Ex. 2"
            value={props.productInfo.productQuantity}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <WeightInput
            weightChange={updateProduct}
            productWeight={props.productInfo.productWeight}
            weightInfo={props.weightInfo}
            setWeightInfo={props.setWeightInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default NewProductInput;
