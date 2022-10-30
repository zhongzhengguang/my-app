import Head from "next/head";
import background from "../public/Assets/surf.mp4";
import Navbar from "./Components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-100%">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video
        src={background}
        className="absolute top-0 left-0 bottom-0 object-cover w-full h-[100%] z-[-1]"
        loop
        autoPlay
        muted
      />
      <Navbar />
      <div className=" w-full h-screen items-center flex justify-center">
        <div>
          <div className=" flex flex-col w-full justify-center m-auto text-center">
            <h1 className="font-bold text-6xl">Surfing. Travel.</h1>
            <p className=" text-2xl mt-4">My first Surfing website</p>
          </div>
          <div className=" flex justify-center w-[30vh] m-auto mt-10">
            <Link href="/map">
              <button
                className="
              mt-5
              mx-2
              w-[200px]
              border
            border-black
            shadow-gray-400 
              p-3 cursor-pointer
              hover:scale-105
              ease-in 
              duration-75"
              >
                Get stated
              </button>
            </Link>
            <Link href="/forecast">
              <button
                className=" 
              mt-5
              w-[200px]
              bg-slate-200
              border
            border-black
              shadow-gray-400 
              p-3 cursor-pointer
              hover:scale-105
              ease-in 
              duration-75
            bg-slate-200/40
              "
              >
                Location
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
