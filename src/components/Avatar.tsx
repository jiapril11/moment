type Props = {
  image?: string | null;
};
export default function Avatar({ image }: Props) {
  return (
    <div className="w-7 h-7 p-0.5 rounded-full bg-gradient-to-br from-green-400 to-blue-500">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full"
        src={image ?? undefined}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
