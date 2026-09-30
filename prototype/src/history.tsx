// Same order as main.tsx: tokens, icon font, site styles.
import '../../design-system/tokens.css';
import 'material-symbols/rounded.css';
import './styles/site.css';
import { mountPage } from './components/Page';
import { HistoryPage } from './pages/History';

mountPage(<HistoryPage />);
