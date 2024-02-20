type Props = {
  image?: string | null;
  size?: "sm" | "normal";
  highlight?: boolean;
};
export default function Avatar({
  image,
  size = "normal",
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

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle =
    "rounded-full overflow-hidden flex justify-center items-center";
  const highlightStyle = highlight
    ? `bg-gradient-to-br from-green-400 to-blue-500 p-0.5`
    : "";
  const sizeStyle = size === "sm" ? "w-9 h-9" : "w-14 h-14 p-[2px]";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageStyle(size: string): string {
  return size === "sm" ? "w-8 h-8 border-1" : "w-[52px] h-[52px] border-2";
}
