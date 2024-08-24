import About from "./layouts/partials/About";
import Header from "./layouts/partials/Header";
import MidCall from "./layouts/partials/MidCall";
import Solutions from "./layouts/partials/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <MidCall />
      <Solutions />
      <footer></footer>
    </>
  );
}
