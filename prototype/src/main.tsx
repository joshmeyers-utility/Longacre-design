import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Order matters: tokens first, then the icon font, then the site styles.
import '../../design-system/tokens.css';
import 'material-symbols/rounded.css';
import './styles/site.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
