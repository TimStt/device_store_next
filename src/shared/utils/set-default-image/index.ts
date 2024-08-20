import { IHandlerDefaultImage } from "@/shared/types/ui";

export const setDefaoultImage = ({
  alt,

  setSrc,
}: IHandlerDefaultImage) => {
  const placeholderSrc = `/placeholder.jpg`;
  if (typeof setSrc === "function") {
    setSrc(placeholderSrc);
    return;
  }

  (setSrc as React.SyntheticEvent<HTMLImageElement, Event>).currentTarget.src =
    placeholderSrc;
};
