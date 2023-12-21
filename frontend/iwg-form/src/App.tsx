
import './App.css'
import MainPage from './mainpage.tsx';

const App: React.FC = () => {
  return (
    <div>
      <header style={{ backgroundColor: '#535353', }}>
        {/* App Bar Content Goes Here */}
      </header>
      <MainPage />
    </div>
  );
};

export default App;