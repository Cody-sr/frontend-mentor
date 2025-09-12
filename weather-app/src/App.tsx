import { Suspense } from "react";
import { Header } from "./components";

function App() {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </div>
    </>
  );
}

export default App;
