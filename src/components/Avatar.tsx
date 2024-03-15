type AvatarSize = "sm" | "md" | "lg" | "xl";
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
        className={`bg-white object-cover rounded-full border border-white ${
          getImageSizeStyle(size).image
        }`}
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
  const { container } = getImageSizeStyle(size);

  return `${baseStyle} ${highlightStyle} ${container}`;
}

type ImageSizeStyle = {
  container: string;
  image: string;
};

function getImageSizeStyle(size: AvatarSize): ImageSizeStyle {
  switch (size) {
    case "sm":
      return {
        container: "w-9 h-9",
        image: "w-8 h-8 border-1",
      };
    case "md":
      return {
        container: "w-13 h-13 p-[2px]",
        image: "w-11 h-11 border-2",
      };
    case "lg":
      return {
        container: "w-14 h-14 p-[2px]",
        image: "w-[52px] h-[52px] border-2",
      };
    case "xl":
      return {
        container: "w-[142px] h-[142px] p-[4px]",
        image: "w-[138px] h-[138px] border-4",
      };
    default:
      throw new Error(`unsupported type size: ${size}`);
  }
}
