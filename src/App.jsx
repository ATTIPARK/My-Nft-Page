import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
