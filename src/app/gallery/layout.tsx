export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-svw h-svh overflow-x-hidden">
      {children}
      {modal}
      <div id="gallery-img" />
    </div>
  );
}
