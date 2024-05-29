import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from "./configs/AppRouter.tsx";
import {AuthProvider} from "./hooks/useAuth.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
  </React.StrictMode>,
)
