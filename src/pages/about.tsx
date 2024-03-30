import { Outlet } from "react-router-dom";
import type { FC } from "react";

const Component: FC = () => {
  return (
    <div>
      <p>nested about view:</p>
      <h1>Parent Component</h1>
      <Outlet />
      hello
    </div>
  );
};

export default Component;
