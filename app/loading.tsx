import Image from "next/image";
import loadingGif from "../public/loading.gif";

export default function Loading() {
  return <div className="h-[95vh] flex-col flex items-center justify-center w-full">
    <Image src={loadingGif} alt='loading' />
    <h5 className="text-2xl md:text-4xl">Please Wait...🙂</h5>
  </div>;
}
