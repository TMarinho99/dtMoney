import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';

import { Dashboard } from "./components/Dashboard/indes";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransaction';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { GlobalStyle } from "./styles/Global";


Modal.setAppElement('#root');

export const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [theme, setTheme] = useState(dark)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light)
    }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toggleTheme={toggleTheme}/>
        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        
        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
