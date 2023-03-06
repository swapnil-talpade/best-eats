import Background from "./components/background";
import Banner from "./components/banner";
import Cards from "./components/cards";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <Background>
        <Navbar />
        <Banner />
        <Cards />
      </Background>
    </ThemeProvider>
  );
}
