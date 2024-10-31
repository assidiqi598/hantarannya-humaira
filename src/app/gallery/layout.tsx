export default function GalleryLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-svw h-svh overflow-x-hidden bg-main-bg-vertical bg-no-repeat bg-cover">
      {children}
      {modal}
      <div id="gallery-img" />
    </div>
  );
}
