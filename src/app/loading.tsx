import Image from "next/image";
import alt from "@/data/alt";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-svw h-svh flex justify-center items-center">
      <Image
        src="/assets/heart-loading.gif"
        width={100}
        height={100}
        alt={`loading-heart-for-${alt}`}
      />
    </div>
  );
}
