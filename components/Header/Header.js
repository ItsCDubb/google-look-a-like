import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import HeaderPlus from "./HeaderPlus/HeaderPlus";
import { XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Avatar from "../Avatar/Avatar";
import Image from "next/image";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <XIcon
            className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button hidden onClick={search} type="submit">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://en.gravatar.com/userimage/159667732/1ccb5efa49b35757360abba032ecb757.jpg"
        />
      </div>
      <HeaderPlus />
    </header>
  );
}

export default Header;
