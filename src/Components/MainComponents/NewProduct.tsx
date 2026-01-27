import { use, useState } from "react";
import NewProductInput from "./NewProductInput";
import NewProductDispaly from "./NewProductDisplay";
import type { WeightInfo, ProductInfo } from "../../Types";

type PropsElements = {
    productInfo: ProductInfo,
    setProductInfo: React.Dispatch<React.SetStateAction<ProductInfo>>,
    weightInfo: WeightInfo
    setWeightInfo: React.Dispatch<React.SetStateAction<WeightInfo>>
    productList: ProductInfo[];
    setProductList: React.Dispatch<React.SetStateAction<ProductInfo[]>>
}

function NewProduct(props: PropsElements) {


    

  return (
    <div className="mt-10 mx-4 rounded-lg h-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
      <NewProductInput
        productInfo={props.productInfo}
        setProductInfo={props.setProductInfo}
        weightInfo={props.weightInfo}
        setWeightInfo={props.setWeightInfo}
      />
      <NewProductDispaly
        productInfo={props.productInfo}
        weightInfo={props.weightInfo}
        productList={props.productList}
        setProductInfo={props.setProductInfo}
        setProductList={props.setProductList}
      />
    </div>
  );
}

export default NewProduct;
