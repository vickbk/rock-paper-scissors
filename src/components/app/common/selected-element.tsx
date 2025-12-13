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
    <Section>
      <Heading>{title}</Heading>
      {children}
    </Section>
  );
};
