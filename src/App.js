import { FormspreeProvider } from '@formspree/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Message from "./components/Message";
import Footer from "./components/Footer";
import ContactPage from './components/ContactPage';
import Gallery from './components/Gallery';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <Message />
            <FormspreeProvider project="1992070772889222261">
              <ContactPage />
            </FormspreeProvider>
            <Gallery /></>
        } />
        <Route path='*' element={
          <Error />
        }/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
