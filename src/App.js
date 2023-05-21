import './App.css';
import FooterLayout from './common/FooterLayout';
import HeaderLayout from './common/HeaderLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <FooterLayout />
    </div>
  );
}

export default App;
