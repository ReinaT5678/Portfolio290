// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './modules/HomePage.jsx';
import Topics from './modules/TopicsPage.jsx';
import Order from './modules/OrderPage.jsx';
import Gallery from './modules/GalleryPage.jsx';
import Message from './modules/MessagePage.jsx';
import Joke from './modules/JokePage.jsx';
import products from './data/products.js';
import { GiOppositeHearts } from "react-icons/gi";

import Contacts from './modules/contacts/ContactsPage.jsx';
import ContactAdd from './modules/contacts/ContactsAdd.jsx';
import ContactEdit from './modules/contacts/ContactEdit.jsx';
import ResultsPage from './modules/ResultsPage.jsx';

import Navigation from './modules/Navigation.jsx';

function App() {
  const [contact, setContact] = useState({});
  return (
    <>
      <header>
        <h1>Reina <GiOppositeHearts /> Takahara</h1>
      </header>

      <Router>
        <Navigation />
        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/order" element={<Order products={products} />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/message" element={<Message />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/joke" element={<Joke />} />
              <Route path="/contactsPage" element={<Contacts setContact={setContact} />} />
              <Route path="/create" element={<ContactAdd />} />
              <Route path="/edit-contact" element={<ContactEdit contactToEdit={contact} />} />
            </Routes>
          </section>
        </main>
      </Router>

      <footer>
        <p>&copy; ReinaTakahara {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
