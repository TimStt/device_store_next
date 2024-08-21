import { useEffect } from "react";

export const useScrollHidden = (state: boolean) => {
  useEffect(() => {
    state
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [state]);
};
