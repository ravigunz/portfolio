import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layouts/pages/pages';
import { Header, Footer, Home, Education, Projects, Telecommunication, WebDevelopment} from './layouts/pages/pages';

function App() {
  return (
    <div className="App">
    <Header />
    <Footer />
    </div>
  );
}

export default App;
