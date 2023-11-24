import { Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
// eslint-disable-next-line
import { faroTelemetryUrl, getEnvironment } from "../api/urls";

declare const window: any;

export const logError = (error: Error) => {
  if (getEnvironment() === "local") {
    console.log(error);
  }

  if (typeof window !== "undefined" && !!window.faro) {
    window.faro.api.pushError(error);
  }
};

export const initFaro = (): Faro | null => {
  if (getEnvironment() === "local") return null;

  return initializeFaro({
    url: faroTelemetryUrl,
    app: {
      name: "dialogmote-mikrofrontend",
      version: "",
    },
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: false,
      }),
      new TracingInstrumentation(),
    ],
  });
};
