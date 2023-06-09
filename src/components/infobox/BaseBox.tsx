import styled from "styled-components";

interface StylingProps {
  background: string;
}

export const BaseBox = styled.div<StylingProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  gap: 0.5rem;
  padding: var(--a-spacing-4);
  border-radius: var(--a-border-radius-small);
  background: ${(props) => props.background};
`;
