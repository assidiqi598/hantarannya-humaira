"use client";

import Button from "@/components/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-svw h-svh flex flex-col justify-center items-center animate-fadeup">
      <h2>Something went wrong!</h2>
      <Button id="app-error" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
