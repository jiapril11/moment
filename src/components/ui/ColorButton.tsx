type Props = {
  text: string;
  onClick: () => void;
  size?: "sm" | "lg";
};

export default function ColorButton({ text, onClick, size = "sm" }: Props) {
  return (
    <div
      className={`p-0.5 rounded-md bg-gradient-to-br from-green-400 to-blue-500 ${
        size === "lg" ? "p-1" : "p-0.5"
      }`}
    >
      <button
        className={`bg-white rounded-sm text-sm hover:opacity-90 transition-opacity ${
          size === "lg" ? "p-[0.8rem] text-xl" : "p-[0.3rem]"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
