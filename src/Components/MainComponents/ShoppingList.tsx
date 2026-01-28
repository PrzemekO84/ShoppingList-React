import { useState } from "react";
import ListItem from "./ListItem";
import type { WeightInfo, ProductInfo } from "../../Types";

type PropsElements = {
    productInfo: ProductInfo;
    weightInfo: WeightInfo;
    productList: ProductInfo[];
    deleteItem: (id: string) => void;
}



function ShoppingList(props: PropsElements){
    return (
      <div className="mt-15 mb-15">
        <h1 className="text-center text-6xl mb-10">{props.productList.length > 0 && (
            "Shopping List:"
        )}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mx-4">
          {props.productList.map((product, index) => {
            return <ListItem key={product.id} productNumber={index + 1}  product={product} weightInfo={props.weightInfo}
            deleteItem={props.deleteItem}
            />
          })}
        </div>
      </div>
    );
}

export default ShoppingList;