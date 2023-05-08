import "@navikt/ds-css/dist/index.css";
import "./commands";
import { mount, MountReturn } from "cypress/react18";
import { StubResponses, mountWithStubs } from "../utils/mountWithMocks";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithStubs: (componentUnderTest: JSX.Element, stubs: StubResponses) => Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", mount);
Cypress.Commands.add("mountWithStubs", mountWithStubs);
