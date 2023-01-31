import React from "react";
import Image from "next/image";
import metaverseBg from "../public/images/metaverse-bg.jpeg";
import papa from "../public/images/aby.jpg";

function Login() {
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src={papa}
          height={200}
          width={200}
        />
        <button className="bg-green-700 rounded-lg p-5 font-bold animate-pulse">
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={metaverseBg} layout="fill" objectFit="cover" />
      </div>
      Login
    </div>
  );
}

export default Login;
