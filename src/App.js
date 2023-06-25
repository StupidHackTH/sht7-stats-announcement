import { useState } from "react";
import MaxCount from "./MaxCount";
import MaxSpeed from "./MaxSpeed";

function App() {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <button onClick={() => isOpen(true)}>Hit me</button>
      {open && <MaxSpeed />}
    </div>
  );
}

export default App;
