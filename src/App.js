import  AppRoutes  from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;