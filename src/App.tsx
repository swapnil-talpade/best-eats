import Background from "./components/background";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-context";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <ThemeProvider>
        <Background>
          <Navbar />
          <Banner />
        </Background>
      </ThemeProvider>
    </div>
  );
}
