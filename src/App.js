import Map from './components/Map' 
import Loader from './components/Loader' 
import Header from './components/Header'
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchEvents = async () =>{
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json()
      //console.log(events)
      setEventData(events)
      setLoading(false)
      console.log(eventData)
    }

    fetchEvents()
    console.log(eventData)
    console.log(loading)
  }, []) 

  return (
    <div className="App">
      <Header />
      {
        !loading ? <Map eventData={eventData} /> : <h1><Loader /></h1>
      }
      
    </div>
  );
}

export default App;
