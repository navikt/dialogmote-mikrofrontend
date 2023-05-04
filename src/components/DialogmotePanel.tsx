import { SvarTypeDTO } from "../schema/brevSchema";
import React from "react";
import { JegKommerPanel } from "./panels/JegKommerPanel";
import { OnskerAvlysePanel } from "./panels/OnskerAvlysePanel";
import { OnskerEndreTidStedPanel } from "./panels/OnskerEndreTidStedPanel";
import { IkkeSvartPanel } from "./panels/IkkeSvartPanel";
import { BrevType } from "../types/client/brev";

interface Props {
  date: string;
  attending: SvarTypeDTO | null;
  brevType: BrevType;
}

export const DialogmotePanel = ({ date, attending, brevType }: Props) => {
  switch (attending) {
    case "KOMMER":
      return <JegKommerPanel date={date} brevType={brevType} />;
    case "KOMMER_IKKE":
      return <OnskerAvlysePanel date={date} brevType={brevType} />;
    case "NYTT_TID_STED":
      return <OnskerEndreTidStedPanel date={date} brevType={brevType} />;
    default:
      return <IkkeSvartPanel date={date} brevType={brevType} />;
  }
};
