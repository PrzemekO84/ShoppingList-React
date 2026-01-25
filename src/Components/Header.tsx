import { ShoppingBasket } from "lucide-react";

function Header(){
    return (
        <header>
            <div className="bg-stone-700 p-4 flex justify-between items-center h-auto shadow-md/30 shadow-white">
            <div className="flex justify-center items-center gap-3">
                <h1 className="text-4xl">ShoppingList</h1>
                <ShoppingBasket className="mt-2"/>
            </div>
            
            <div className="flex gap-4 text-lg">
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
            </div>
        </div>
        </header>
    )
}

export default Header;