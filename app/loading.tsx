import Image from "next/image";
import loadingGif from "../public/loading.gif";

export default function Loading() {
  return (
    <div className="flex h-[95vh] w-full flex-col items-center justify-center">
      <Image src={loadingGif} alt="loading" />
      <h5 className="text-2xl md:text-4xl">Please Wait...🙂</h5>
    </div>
  );
}
