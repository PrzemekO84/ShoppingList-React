import NewProductInput from "./NewProductInput";
import type { WeightInfo, ProductInfo } from "../../Types";
import { useEffect } from "react";

type PropsElements = {
    productInfo: ProductInfo
    weightInfo: WeightInfo
    productList: ProductInfo[];
    setProductList: React.Dispatch<React.SetStateAction<ProductInfo[]>>
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>,

}


function NewProductDispaly(props: PropsElements) {

  function addItem() {
    props.setProductList((prevList) => [
      ...prevList,
      {
        id: crypto.randomUUID(),
        productName: props.productInfo.productName,
        productQuantity: props.productInfo.productQuantity,
        productWeight: props.productInfo.productWeight + props.weightInfo.unit
      }])
    props.setProductInfo({
      id: "",
      productName: "",
      productQuantity: "",
      productWeight: ""
    })
  }

  useEffect(() => {

    function handleEnterEvent(event: KeyboardEvent){
      if (event.key === "Enter" && props.productInfo.productName !== "") {
        addItem();
      }
    }

    window.addEventListener("keydown", handleEnterEvent)

    return () => {
      window.removeEventListener("keydown", handleEnterEvent);
    }
  }, [props.productInfo])

    return (
      <div className="border-3 border-purple-800 shadow-md/25 shadow-white rounded-xl p-5 flex flex-col min-h-110 md:h-auto">
        <h2 className="text-3xl text-center">Product informations</h2>
        <div className="flex flex-col gap-4 justify-center items-center text-3xl flex-grow">
          <p>Product name: {props.productInfo.productName}</p>
          <p>Quantity: {props.productInfo.productQuantity}</p>
          <p>
            Weight: {props.productInfo.productWeight}
            {props.productInfo.productWeight && props.weightInfo.unit}
          </p>
        </div>
        <div className="flex justify-end mr-2">
          <button 
          disabled={!props.productInfo.productName}
          className="px-5 py-3 text-2xl border-2 border-black bg-violet-800 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    );
}

export default NewProductDispaly;