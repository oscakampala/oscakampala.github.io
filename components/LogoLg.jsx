
import Image from "next/image";

function LogoLg() {
    return ( 
        <div className="navLogo flex items-center text-[25px]">
            <Image 
            src="/images/osca-logo.png" 
            height={100} 
            width={100} />
             <span>OSCA {'{'} <span className="kampala text-orange-400 ">Kampala</span>{" }"}</span>
        </div>
     );
}

export default LogoLg;