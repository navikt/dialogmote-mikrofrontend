import styled from "styled-components";
import { ExclamationmarkTriangleFillIcon } from "@navikt/aksel-icons";
import { Heading, Tag } from "@navikt/ds-react";

export const YellowWarningIcon = styled(ExclamationmarkTriangleFillIcon)`
  background: radial-gradient(circle at 50% 57%, var(--a-surface-default) 32%, 0, transparent);
  color: var(--ac-alert-icon-warning-color, var(--a-icon-warning));
`;

export const StyledPanel = styled.div`
  width: 100%;
  text-decoration: none;
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 0.5px 0 rgba(0, 0, 0, 0.18);

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 0 0.5px 0 rgba(0, 0, 0, 0.08);

    .navds-link-panel__chevron {
      transform: translateX(4px);
    }

    .dialogmote__title {
      text-decoration: underline;
      color: var(--ac-link-panel-hover-text, var(--a-text-action));
    }
  }
`;

export const HeadingRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: var(--a-spacing-4);
  border-bottom: 1px solid #0000001a;
`;

export const MainContentRow = styled.div`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: var(--a-spacing-4);
`;

export const MainContentText = styled(Heading)`
  font-weight: var(--a-font-weight-regular);
`;

export const ChevronSection = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ContainedTag = styled(Tag)`
  width: fit-content;
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
`;
