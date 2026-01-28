
import { useState, useEffect} from "react";
import NewProduct from "./MainComponents/NewProduct";
import ShoppingList from "./MainComponents/ShoppingList";
import type { WeightInfo, ProductInfo } from "../Types";


function Main() {
  const [weightInfo, setWeightInfo] = useState<WeightInfo>({
    weightCategory: "Kilograms",
    unit: "g",
  });

  const [productInfo, setProductInfo] = useState<ProductInfo>({
    id: "",
    productName: "",
    productQuantity: "",
    productWeight: "",
  });

  const [productList, setProductList] = useState<ProductInfo[]>(() => {
    const savedData = localStorage.getItem("myShoppingList");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("myShoppingList", JSON.stringify(productList));
    console.log(localStorage);
  }, [productList])


  function deleteItem(id: string){
    setProductList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      })
    })
  }


  console.log(productList);

  return (
    <main className="flex-grow">
      <div className="mt-12 flex justify-center items-center flex-col gap-12 pb-20">
        <h1 className="text-6xl text-shadow-lg/60 text-center text-shadow-violet-700">
          Your own adjustable shopping list
        </h1>
        <h2 className="text-2xl text-shadow-lg/50 text-center text-shadow-violet-700">
          Create your own shopping list by simply adding and removing products!
        </h2>
      </div>
      <NewProduct 
        productInfo={productInfo}
        setProductInfo={setProductInfo}
        weightInfo={weightInfo}
        setWeightInfo={setWeightInfo}
        productList={productList}
        setProductList={setProductList}
       />

        <ShoppingList 
        productInfo={productInfo}
        weightInfo={weightInfo}
        productList={productList}
        deleteItem={deleteItem}
        />

    </main>
  );
}

export default Main;
