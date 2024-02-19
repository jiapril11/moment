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
        className={`bg-white rounded-full ${getImageStyle(size)}`}
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full";
  const highlightStyle = highlight
    ? `bg-gradient-to-br from-green-400 to-blue-500 p-0.5`
    : "";
  const sizeStyle = size === "sm" ? "w-7 h-7" : "w-14 h-14";

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageStyle(size: string): string {
  return size === "sm" ? "p-[0.05rem]" : "p-[0.1rem]";
}
