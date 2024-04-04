interface HeadingProps {
  children: React.ReactNode;
}

const h1: React.FC<HeadingProps> = ({ children }) => {
  return <h1 className="text-xl">{children}</h1>;
};

export const Heading = { h1 };
