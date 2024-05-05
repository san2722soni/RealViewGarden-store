import Image from "next/image";
// import bg1 from "@/public/bg1.png"

export default function AppBgImg() {
  return (
    <>
      <picture>
        <img
          src={"/bg1.png"}
          className="object-cover cursor-pointer opacity-10
           absolute w-full h-full"
          alt="BgImage"
        />
      </picture>
    </>
  );
}
