import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Same order as main.tsx: tokens, icon font, site styles.
import '../../design-system/tokens.css';
import 'material-symbols/rounded.css';
import './styles/site.css';
import { CampusPage } from './pages/Campus';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CampusPage />
  </StrictMode>,
);
