import { BrowserRouter } from "react-router-dom";
import { Layout } from "./app/Layout";
import { ScrollToTop } from "./shared/components/scrollTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/user">
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
