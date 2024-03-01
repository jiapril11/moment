"use client";

import useSWR from "swr";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import { DetailUser } from "@/model/user";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  // const users = data?.followings;
  // const users: undefined = undefined;
  const users = data?.followings && [
    ...data?.followings,
    ...data?.followings,
    ...data?.followings,
    ...data?.followings,
  ];
  return (
    <section className="w-full flex justify-center items-center mb-4 p-4 shadow-sm shadow-neutral-300 rounded-md min-h-[90px] overflow-x-auto relative z-0">
      {loading ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        (!users || users?.length === 0) && <p>You can follow others :)</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/usre/${username}`}
              className="flex flex-col items-center w-18"
            >
              <Avatar image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
