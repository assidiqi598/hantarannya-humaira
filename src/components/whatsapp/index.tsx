import Link from "next/link";
import Image from "next/image";
import "./whatsapp.css";
export default function WhatsApp() {
  return (
    <Link
      className="whatsapp fixed bottom-5 right-5 z-50"
      href="https://wa.me/+6289670428545"
      target="_blank"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt="hantaran-seserahan-humaira-di-purworkerto-banyumas-cilacap-purbalingga-whatsapp"
        width={50}
        height={50}
        priority={false}
      />
    </Link>
  );
}
