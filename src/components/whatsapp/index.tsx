import Link from "next/link";
import Image from "next/image";
import "./whatsapp.css";
import alt from "@/data/alt";

export default function WhatsApp() {
  return (
    <Link
      className="whatsapp fixed bottom-5 right-5 z-50 opacity-0 animate-fadeup animation-delay-1200"
      href="https://wa.me/+6289670428545"
      target="_blank"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt={`${alt}-whatsapp`}
        width={50}
        height={50}
        priority={false}
      />
    </Link>
  );
}
