import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/config/theme';
import { ContractContextProvider } from './context/contract-context';
import { PatentsContextProvider } from './context/patents-context';
import { MessagesContextProvider } from './context/messages-context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <ContractContextProvider>
        <PatentsContextProvider >
            <MessagesContextProvider >
            <App />
            
            </MessagesContextProvider>
        
        </PatentsContextProvider>
        
    </ContractContextProvider>
  </ThemeProvider>
    </React.StrictMode>
  );

  reportWebVitals();