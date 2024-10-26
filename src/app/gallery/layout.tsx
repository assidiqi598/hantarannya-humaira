export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-svw h-svh overflow-x-hidden bg-main-bg-vertical bg-no-repeat bg-cover">
      {children}
    </div>
  );
}
