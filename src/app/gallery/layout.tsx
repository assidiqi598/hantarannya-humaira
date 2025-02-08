export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="landscape:w-full">
      {children}
      {modal}
      <div id="gallery-img" />
    </div>
  );
}
