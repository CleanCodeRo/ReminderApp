import React from 'react'
import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';


export default function App() {
  return (
    <BrowserRouter>
    <div>Hello</div>
      <Routes>
        <Route path="/home" element={<HomePage/>}> </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);