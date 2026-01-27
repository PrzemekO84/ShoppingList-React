import { Trash2 } from "lucide-react";
import type { WeightInfo, ProductInfo } from "../../Types";


type PropsElements = {
    weightInfo: WeightInfo;
    product: ProductInfo;
    deleteItem: (id: string) => void;
    productNumber: number
}



function ListItem(props: PropsElements) {
  function checkWeight() {
    {
      if (
        props.product.productWeight === "g" ||
        props.product.productWeight === "kg" ||
        props.product.productWeight === "ml" ||
        props.product.productWeight === "l"
      ) {
        return "Weight: None";
      } else {
        return `Weight: ${props.product.productWeight}`;
      }
    }
  }

  return (
    <div className="flex flex-col gap-4 border-violet-200 rounded-xl p-4 text-2xl shadow-lg shadow-violet-200/10 h-auto border-3">
        <div className="flex items-center justify-center">
            <h1 className="border-2 border-black text-3xl py-2 px-5 font-semibold rounded-full bg-v bg-purple-900">{props.productNumber}</h1>
        </div>
      
      <div
        className="flex gap-3"
      >
        <div className="w-[50%] flex flex-col justify-around gap-6 py-2">
          <p>Product: {props.product.productName}</p>
          <p>
            Quantity:{" "}
            {props.product.productQuantity
              ? props.product.productQuantity
              : "None"}
          </p>
          <p>
            {checkWeight()}
            {/* This will not work since there will be always a unit but it stays like this since i had to refractrue whole structure of weight/product */}
          </p>
        </div>

        <div className="w-[50%] flex justify-end">
          <div
            className="flex self-end items-center rounded-xl bg-red-500 p-2 border-2 border-black cursor-pointer"
            onClick={() => {
              {
                props.deleteItem(props.product.id);
              }
            }}
          >
            <button className="mr-2 font-semibold text-black cursor-pointer">
              Delete{" "}
            </button>
            <Trash2 className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;