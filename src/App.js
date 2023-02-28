import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/Signin';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
