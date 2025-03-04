import { Container } from "@mui/material";

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="bg-pink-200 min-h-svh" disableGutters maxWidth={false}>
      <Container className="py-12">{children}</Container>
    </Container>
  );
}
