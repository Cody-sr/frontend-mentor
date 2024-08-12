import { BgImage, Accordion } from "./components";
import { starIcon } from "./assets/images";
import { useState } from "react";
function App() {
  const [accordionData, setAccordionData] = useState([
    { id: 1, content: "What is Frontend Mentor, and how will it help me?" },
    { id: 2, content: "Is Frontend Mentor free?" },
    { id: 3, content: "Can I use Frontend Mentor projects in my portfolio?" },
    { id: 4, content: "How can I get help if I'm stuck on a challenge?" },
  ]);
  return (
    <>
      <main className="relative h-svh bg-purple-200">
        <BgImage />
        <section className="absolute left-0 top-0 z-20 grid h-full w-full place-items-center p-3">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl shadow-purple-300">
            <div className="mb-8 inline-flex items-center gap-4">
              <img src={starIcon} alt="star icon" className="size-8" />
              <h1 className="text-4xl font-bold">FAQs</h1>
            </div>
            <Accordion data={accordionData} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
