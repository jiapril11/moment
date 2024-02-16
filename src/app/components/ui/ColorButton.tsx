type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="p-0.5 rounded-md bg-gradient-to-br from-green-400 to-blue-500">
      <button
        className="bg-white rounded-sm text-sm p-[0.3rem] hover:opacity-90 transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
