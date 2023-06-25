import { useState } from "react";
import MaxCount from "./MaxCount";

function App() {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <button onClick={() => isOpen(true)}>Hit me</button>
      {open && <MaxCount />}
    </div>
  );
}

export default App;
