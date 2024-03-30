import type { FC, ReactNode } from "react";

//types
type ContainerSecondaryProps = {
  children: ReactNode;
};

const Component: FC<ContainerSecondaryProps> = ({ children }) => {
  return (
    <div className="h-[calc(100vh-8px)] px-4 relative bg-white ">
      {children}
    </div>
  );
};

export default Component;
