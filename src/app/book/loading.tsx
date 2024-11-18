import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-svw h-svh flex justify-center items-center bg-white">
      <Image
        src="/assets/spinner.gif"
        width={100}
        height={100}
        unoptimized
        alt="spinner"
      />
    </div>
  );
}
