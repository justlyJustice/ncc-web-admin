"use client";

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();

    const { user } = useAuth();

    useEffect(() => {
      if (!user) {
        return router.push("/");
      }
    }, []);

    return <Component {...props} />;
  };
}
