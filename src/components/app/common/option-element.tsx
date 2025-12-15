export const OptionElement = ({
  children,
  borderColor,
}: {
  children: React.ReactNode;
  borderColor: string;
}) => {
  return (
    <div
      className={`border-12 rounded-full size-24 grid place-items-center foreground c-background ${
        borderColor ? borderColor : "border-amber-300"
      }`}
    >
      <span className=" scale-70">{children}</span>
    </div>
  );
};
