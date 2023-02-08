interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <body className="bg-white dark:bg-black w-full h-full">
      <div className="w-full h-full">{children}</div>
    </body>
  );
};

export default Background;
