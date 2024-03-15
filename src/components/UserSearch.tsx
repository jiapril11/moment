"use client";

import { SearchUser } from "@/model/user";
import { useState } from "react";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import UserCard from "./UserCard";
import useDebounce from "@/hooks/debounce";

export default function UserSearch() {
  // 키워드입력하면 api/search/${keyword}로 검색결과를 가져와서 보여준다.
  // 검색하는 keyword가 있다면 /api/search/bob -> 유저네임이나 네임이 bob인 유저들을 가져온다.
  // 검색하는 keyword가 없다면 /api/search -> 모든 유저들을 가져온다.
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 2000);
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form onSubmit={onSubmit} className="w-full mb-4">
        <input
          className="w-full text-xl p-3 outline-none border border-gray-400"
          type="text"
          autoFocus
          placeholder="Search for a username or name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>something wrong!</p>}
      {isLoading && <GridLoader />}
      {!isLoading && !error && users?.length === 0 && <p>No user found</p>}
      <ul className="w-full p-4">
        {users &&
          users?.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
