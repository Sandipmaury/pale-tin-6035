import { Box, Hide } from "@chakra-ui/react";
import { useContext } from "react";
import Footer from "./components/Footer";
import LowerNavbar from "./components/LowerNavbar";
import MiddleNavbar from "./components/MiddleNavbar";
import UpperNavbar from "./components/UpperNavber";
import { AppContext } from "./context/AppContext";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  const { darkMode } = useContext(AppContext);
  return (
    <Box className="App" {...darkMode}>
      <UpperNavbar />
      <MiddleNavbar />
      <Hide below="sm">
        <LowerNavbar />
      </Hide>
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
