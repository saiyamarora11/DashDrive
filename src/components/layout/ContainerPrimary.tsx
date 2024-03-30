import type { FC, ReactNode } from "react";

//types
type ContainerPrimaryProps = {
  children: ReactNode;
};

const Component: FC<ContainerPrimaryProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden md:overflow-scroll ">
      {children}
    </div>
  );
};

export default Component;
