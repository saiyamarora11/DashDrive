import { Outlet } from "react-router-dom";
import type { FC } from "react";
import { signOutUser } from "@/utils/auth";

const Component: FC = () => {
  const signOut = async () => {
    await signOutUser();
  };
  return (
    <div>
      <p>nested about view:</p>
      <h1>Parent Component</h1>
      <div onClick={signOut} className="btn h-8">
        signOutUser
      </div>
      <Outlet />
      hello
    </div>
  );
};

export default Component;
