import { BrowserRouter } from 'react-router';
import ProjectRoutes from './routes/Routes';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <ProjectRoutes />
        </BrowserRouter>
    );
}

export default App;
