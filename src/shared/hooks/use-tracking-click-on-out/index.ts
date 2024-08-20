import { TActionTypeModal } from "@/shared/types/ui";
import type { RefObject } from "react";
import { useEffect } from "react";

type Handler = () => void;

type AnyEvent = MouseEvent | TouchEvent;

export function useTrackingClickOnOut<T extends HTMLElement = HTMLElement>(
  handler: Handler,
  open: boolean,
  ref?: RefObject<T>
): void {
  useEffect(() => {
    if (!open || !ref?.current) return;

    const listener = (event: AnyEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [ref, handler, open]);
}
