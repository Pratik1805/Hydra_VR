import Nav from "./Components/Nav";
import { Contact, Hero } from "./Sections/index";
function App() {
  return (
    <main className=" relative">
      <Nav />
      <section className=" xl:padding-l wide:padding-r padding-b bg-primary">
        <Hero />
      </section>
      <section className="padding bg-primary">
        <Contact />
      </section>
    </main>
  );
}

export default App;
