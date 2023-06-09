import { InfoBox } from "../infobox/InfoBox";
import React from "react";
import { CheckmarkCircleIcon } from "@navikt/aksel-icons";

export const JegDeltarBoks = () => {
  return (
    <InfoBox
      text="Ja, jeg deltar"
      icon={<CheckmarkCircleIcon title="Du har svart at du deltar på Dialogmøte" fontSize="1.5rem" />}
      background={"var(--surface-success-subtle, #CCF1D6);"}
    />
  );
};
