import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Same order as main.tsx: tokens, icon font, site styles.
import '../../design-system/tokens.css';
import 'material-symbols/rounded.css';
import './styles/site.css';
import { WorkforcePage } from './pages/Workforce';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WorkforcePage />
  </StrictMode>,
);
