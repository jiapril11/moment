type AvatarSize = "sm" | "md" | "lg";
type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};
export default function Avatar({
  image,
  size = "lg",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full border border-white ${getImageStyle(
          size
        )}`}
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const baseStyle =
    "rounded-full overflow-hidden flex justify-center items-center";
  const highlightStyle = highlight
    ? `bg-gradient-to-br from-green-400 to-blue-500 p-0.5`
    : "";
  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case "sm":
      return "w-9 h-9";
    case "md":
      return "w-13 h-13 p-[2px]";
    case "lg":
      return "w-14 h-14 p-[2px]";
  }
}
function getImageStyle(size: AvatarSize): string {
  switch (size) {
    case "sm":
      return "w-8 h-8 border-1";
    case "md":
      return "w-11 h-11 border-2";
    case "lg":
      return "w-[52px] h-[52px] border-2";
  }
}
