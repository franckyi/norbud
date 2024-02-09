import React from "react";
import Image from "next/image";


const Footer: React.FC = () => {
    return (
        <footer className="bg-green-900 text-white p-20 flex flex-col items-center">
            <p>@ 2024 Norbud. All rights reserved.</p>
            <div className="mt-4">
                <Image src="logo.svg" alt="Logo" width={100} height={100} />
            </div>
        </footer>
    );
};

export default Footer;
