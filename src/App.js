import './App.css';
import TopBar from './TopBar';
import StoreListing from './StoreListing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './Background';

import CardLayout from './CardLayout';
function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      {/* <StoreListing/> */}
      <CardLayout/>
    </div>
  );
}

export default App;
