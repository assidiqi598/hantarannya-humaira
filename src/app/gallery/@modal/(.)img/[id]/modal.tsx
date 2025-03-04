"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Button, Stack } from "@mui/material";
import { usePathname } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const [type, theme] = decodeURIComponent(usePathname().split("/").filter(Boolean).pop()!).split(
    "_"
  );

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onDismiss}
    >
      <dialog
        ref={dialogRef}
        className="rounded-lg"
        onClose={onDismiss}
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#212121"
          className="bi bi-x-circle sticky top-3 right-3 ml-auto font-bold cursor-pointer portrait:hidden"
          viewBox="0 0 16 16"
          onClick={onDismiss}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        {children}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ margin: ".5rem" }}>
          <Button
            id="modal-close-btn"
            className="landscape:hidden"
            variant="contained"
            onClick={onDismiss}
            color="secondary"
          >
            Close
          </Button>
          <Button
            id="modal-book-btn"
            className="landscape:hidden"
            variant="contained"
            onClick={() => {
              router.push(`/book?type=${type}&theme=${theme}`);
            }}
          >
            Book this
          </Button>
        </Stack>
      </dialog>
    </div>,
    document.getElementById("gallery-img")!
  );
}
