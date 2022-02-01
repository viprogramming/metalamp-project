import { AuthProvider } from "./hooks/useAuth";
import Navigation from "./navigation";
import GlobalStyle from "./styles/globalStyles";

const App = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  </>
);

export default App;
