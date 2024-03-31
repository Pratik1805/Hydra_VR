import Nav from "./Components/Nav";
import { About, Build, Construct, Contact, Hero, Technologies } from "./Sections/index";
function App() {
  return (
    <main className=" relative">
      <Nav />
      <section className="padding bg-primary ">
        <Hero/>
      </section>
      <section className="padding bg-primary">
        <Contact />
      </section>
      <section className="padding bg-primary">
       <About/>
      </section>
      <section className="padding bg-primary">
       <Build/>
      </section>
      <section className="padding bg-primary">
       <Technologies/>
      </section>
      <section className="padding bg-primary">
       <Construct/>
      </section>
    </main>
  );
}

export default App;
