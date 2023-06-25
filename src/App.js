import { useState } from "react";

function App() {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <button onClick={() => isOpen(true)}>Hit me</button>
      {open && <p>Hi there</p>}
    </div>
  );
}

export default App;
