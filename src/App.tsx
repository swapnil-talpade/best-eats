import Background from "./components/background";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-context";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <ThemeProvider>
        <Background>
          <Navbar />
        </Background>
      </ThemeProvider>
    </div>
  );
}
