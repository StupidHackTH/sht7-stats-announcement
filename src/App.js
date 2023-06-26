import { useState } from "react";
import MaxCount from "./MaxCount";
import MaxSpeed from "./MaxSpeed";
import TimeSpend from "./TimeSpend";

function App() {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <button onClick={() => isOpen(true)}>Hit me</button>
      {open && <TimeSpend />}
    </div>
  );
}

export default App;
