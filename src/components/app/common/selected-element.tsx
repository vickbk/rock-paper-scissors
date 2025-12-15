import type { ReactNode } from "react";
import { Heading } from "../../shared/Heading";
import { Section } from "../../shared/Section";

export const SelectedElement = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Section className="grid justify-items-center gap-4 md:scale-200">
      {children}
      <Heading className="md:row-start-1">{title}</Heading>
    </Section>
  );
};
