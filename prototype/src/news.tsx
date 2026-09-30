// Same order as main.tsx: tokens, icon font, site styles.
import '../../design-system/tokens.css';
import 'material-symbols/rounded.css';
import './styles/site.css';
import { mountPage } from './components/Page';
import { NewsPage } from './pages/News';

mountPage(<NewsPage />);
