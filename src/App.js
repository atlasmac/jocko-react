import { FormspreeProvider } from '@formspree/react';
import Header from "./components/Header";
import Home from "./components/Home";
import Message from "./components/Message";
import Footer from "./components/Footer";
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Message />
      <FormspreeProvider project="1992070772889222261">
        <ContactPage />
      </FormspreeProvider>
      <Footer />
    </div>
  );
}

export default App;
