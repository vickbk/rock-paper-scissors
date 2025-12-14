export const OptionElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-12 rounded-full size-24 grid place-items-center foreground c-background border-amber-300">
      <span className=" scale-70">{children}</span>
    </div>
  );
};
