import React, {useEffect, useState, Suspense} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Preloader from './components/preloader';

const MainLayout = React.lazy(() => import('./layout/main'));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
      }, []);
  return (
      <>
      { loading ? 
        (<Preloader />) 
        : 
        (
            <Router>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <MainLayout />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
        ) 
    }
      </>
  );
}

export default App;
