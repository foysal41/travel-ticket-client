"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRedirect = ({ children }) => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.replace("/");
    }
  }, [session, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (session?.user) {
    return null;
  }

  return children;
};

export default AuthRedirect;