import useSWRImmutable from "swr/immutable";
import { fetcher } from "./api/api";
import { apiUrl } from "./api/urls";
import Komponent from "./components/Komponent";
import "@navikt/ds-css";

function App() {
  const { data } = useSWRImmutable(apiUrl, fetcher);

  return (
    <section>
      <Komponent tekst={`Har kommende dialogmøte: ${data?.harKommendeDialogmote}`} />
    </section>
  );
}

export default App;
