const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const ISDIALOGMOTE_API_URL: EnvUrl = {
  local: "http://localhost:3000/api/v2/arbeidstaker/brev",
  development: `https://www.intern.dev.nav.no/tms-min-side-proxy/syk/dialogmote/api/v2/arbeidstaker/brev`,
  production: `https://www.nav.no/tms-min-side-proxy/syk/dialogmote/api/v2/arbeidstaker/brev`,
};

const SYFOMOTEBEHOV_API_URL: EnvUrl = {
  local: "http://localhost:3000/syfomotebehov/api/v3/arbeidstaker/motebehov/all",
  development: `https://www.intern.dev.nav.no/tms-min-side-proxy/motebehov/syfomotebehov/api/v3/arbeidstaker/motebehov/all`,
  production: `https://www.nav.no/tms-min-side-proxy/motebehov/syfomotebehov/api/v3/arbeidstaker/motebehov/all`,
};

const DIALOGMOTE_URL: EnvUrl = {
  local: "http://localhost:3000/syk/dialogmoter/sykmeldt",
  development: `https://www.ekstern.dev.nav.no/syk/dialogmoter/sykmeldt`,
  production: `https://www.nav.no/syk/dialogmoter/sykmeldt`,
};

export const dialogmoteUrl = DIALOGMOTE_URL[getEnvironment()];
export const isdialogmoteApiUrl = ISDIALOGMOTE_API_URL[getEnvironment()];
export const syfomotebehovApiUrl = SYFOMOTEBEHOV_API_URL[getEnvironment()];
