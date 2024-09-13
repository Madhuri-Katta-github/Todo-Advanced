import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TodosContextProvider from './Contexts/TodosContextProvider.tsx'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId="aff225ea7e69425ea496fcf6e3b19af9"
      domain="https://selflearn.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>

  </StrictMode>,
)

// utube-https://www.youtube.com/watch?v=J3aFEqouK44&t=14206s
