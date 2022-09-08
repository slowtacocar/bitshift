import { ReactNode } from "react";
import Button from "./Button";

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
      {status === "loading" ? "loading..." : children}
    </Button>
  );
}
