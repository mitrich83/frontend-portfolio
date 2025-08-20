import { ThemeProvider } from "./theme/ThemeProvider";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
