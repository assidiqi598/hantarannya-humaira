import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Image
      src="/assets/spinner.gif"
      width={100}
      height={100}
      alt="spinner"
    />
  );
}
