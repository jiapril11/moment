import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
// import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";
import SignIn from "@/components/SignIn";
import { Metadata } from "next";
import { authOptions } from "@/app/lib/auth";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign up or Log in to Instagram Clone.",
};

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-20">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
