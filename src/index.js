import ReactDOM from 'react-dom/client';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Pages/Pages.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
library.add(fas,fab);

