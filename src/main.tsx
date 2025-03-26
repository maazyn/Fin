import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { Modal, ModalProvider } from "./Context/Modal";

import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <Modal/>
    </ModalProvider>
  </StrictMode>,
)
