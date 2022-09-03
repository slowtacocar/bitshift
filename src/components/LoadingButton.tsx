import { ReactNode } from "react";
import Button from "./Button";
import * as React from "react";

export interface LoadingButtonProps {
  status: string;
  children: ReactNode;
}

export default function LoadingButton({
  children,
  status,
}: LoadingButtonProps) {
  return (
    <Button type="submit" disabled={status === "loading"}>
      {status === "loading"
        ? "loading..."
        : status === "success"
        ? "✓"
        : status === "error"
        ? "x"
        : children}
    </Button>
  );
}
