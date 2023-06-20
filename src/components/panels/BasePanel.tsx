import React from "react";
import { Heading } from "@navikt/ds-react";
import { HeadingSpacing } from "../typography/typography";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import { Column } from "../columns/Column";
import {
  AlertContainer,
  ChevronSection,
  ContainedTag,
  HeadingRow,
  MainContentRow,
  MainContentText,
  StyledPanel,
  YellowWarningIcon,
} from "./PanelComponents";

interface Heading {
  text: string;
  icon: "warning" | "none";
}

interface MainContent {
  text: string;
  textFormat: "text" | "date";
  tag: TagMeta;
}

export interface TagMeta {
  text: string;
  variant: "success-moderate" | "warning-moderate" | "neutral-moderate";
}

interface Props {
  href: string;
  onClick: () => void;
  heading: Heading;
  mainContent: MainContent;
}
export const BasePanel = ({ href, onClick, heading, mainContent }: Props) => {
  return (
    <StyledPanel
      onClick={() => {
        onClick();
        window.location.href = href;
      }}
    >
      <HeadingRow>
        <HeadingSpacing size={"small"} level={"2"} className="dialogmote__title">
          {heading.text}
        </HeadingSpacing>
        <ChevronSection>
          {heading.icon === "warning" ? (
            <AlertContainer>
              <YellowWarningIcon />
            </AlertContainer>
          ) : null}
          <ChevronRightIcon className="navds-link-panel__chevron" aria-hidden />
        </ChevronSection>
      </HeadingRow>
      <MainContentRow>
        <Column gap={"1rem"}>
          <MainContentText size={mainContent.textFormat === "text" ? "medium" : "large"} level={"3"}>
            {mainContent.text}
          </MainContentText>
          <ContainedTag size={"small"} variant={mainContent.tag.variant}>
            {mainContent.tag.text}
          </ContainedTag>
        </Column>
      </MainContentRow>
    </StyledPanel>
  );
};
