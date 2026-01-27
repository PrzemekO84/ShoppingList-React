import { Github } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";

function Footer(){
    return (
        <footer className="flex flex-col justify-center items-center h-auto bg-stone-950 py-3 shadow-xl shadow-white">
            <div className="flex justify-center items-center gap-7 my-6">
                <div className="flex justify-center items-center gap-3">
                    <a href="https://github.com/PrzemekO84">Github </a>
                    <a href="https://github.com/PrzemekO84"><Github /></a>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <a href="https://www.linkedin.com/in/przemek-orzechowski/">Linkedin </a>
                    <a href="https://www.linkedin.com/in/przemek-orzechowski/"><Linkedin /></a>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <a href="https://youtu.be/dQw4w9WgXcQ">Youtube </a>
                    <a href=""><Youtube /></a>
                </div>
            </div>
            <div className="mb-2">
                <h2>&copy; Designed by Przemek Orzechowski</h2>
            </div>
            
        </footer>
    );
}

export default Footer;