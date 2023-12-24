import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import BodyContent from './components/BodyContent'; // Import the new BodyContent component
import './App.css';
import Headroom from 'react-headroom';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="content">
          <Headroom>
            <Header />
          </Headroom>
          <BodyContent /> 
        </div>
      )}
    </div>
  );
};

export default App;
