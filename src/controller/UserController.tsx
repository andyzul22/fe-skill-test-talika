"use client";

import ProfileUser from "@/component/ProfileUser/ProfileUser";
import { User } from "@/types";
import { encryptEmail } from "@/utils";
import { useEffect, useState } from "react";

function UserController() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/user");
      const data = await res.json();
      const { encrypted } = await encryptEmail(data.email);
      setUser({ ...data, email: encrypted });
    };
    fetchData();
  }, []);

  return user ? <ProfileUser data={user} /> : null;
}
export default UserController;
