import { SearchUser } from "@/model/user";
import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, username, email, name, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    followings: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch(`*[_type == "user" && username == "${username}"][0]{
    ...,
    "id": _id,
    followings[] -> {username, image},
    followers[] -> {username, image},
    "bookmarks": bookmarks[]-> _id
  }`);
}

export async function searchUsers(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}") || (username match "${keyword}")`
    : "";

  return client
    .fetch(
      `*[_type == "user" ${query}]{
      ...,
      "followings": count(followings),
      "followers": count(followers),
    }`
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        followings: user.followings ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}

export async function getUserForProfile(username: string) {
  return client
    .fetch(
      `
  *[_type == "user" && username == "${username}"][0]{
    ...,
    "id": _id,
    "followings": count(followings),
    "followers": count(followers),
    "posts": count(*[_type =="post" && author -> username == "${username}"])}`
    )
    .then((user) => ({
      ...user,
      followings: user.followings ?? 0,
      followers: user.followers ?? 0,
      posts: user.posts ?? 0,
    }));
}
