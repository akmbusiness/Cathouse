import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import CatHousePage from "@/pages/CatHousePage";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="app-shell" data-testid="app-shell">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CatHousePage />} />
            <Route path="*" element={<CatHousePage />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
