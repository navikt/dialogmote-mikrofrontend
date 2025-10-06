import { union, object, literal, boolean, unknown, z } from "zod";

const skjemaType = union([literal("MELD_BEHOV"), literal("SVAR_BEHOV")]);

export const motebehovSchema = object({
  visMotebehov: boolean(),
  skjemaType: skjemaType,
  motebehov: unknown().nullish(),
  motebehovWithFormValues: unknown().nullish(),
});

export type MotebehovDTO = z.infer<typeof motebehovSchema>;
