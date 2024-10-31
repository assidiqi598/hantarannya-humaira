import { Modal } from "./modal";
import ImgPage from "@/app/gallery/components/gallery-img";

export default function PhotoModal() {
  return (
    <Modal>
      <ImgPage isModal={true} />
    </Modal>
  );
}
