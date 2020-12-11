import Map from './components/Map' 
import Loader from './components/Loader' 
import Header from './components/Header'
import {useState, useEffect} from 'react';
import './App.css';
import Icon from '@iconify/react';
import locationIcon3 from '@iconify-icons/openmoji/iceberg'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import locationIcon2 from '@iconify-icons/noto/volcano'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [markType, setMarkType] = useState(0)
  const [buttonBack1, setButtonBack1] = useState('')
  const [buttonBack2, setButtonBack2] = useState('')
  const [buttonBack3, setButtonBack3] = useState('')
  
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
      <button className="buttons fire" style={{backgroundColor:buttonBack1}}  onClick={() =>{setMarkType(8); setButtonBack1('green'); setButtonBack2('');setButtonBack3('')} }>
        <Icon icon={locationIcon} className="icons" />
      </button>
      <button className="buttons ice" style={{backgroundColor:buttonBack2}} onClick={() =>{setMarkType(12); setButtonBack2('green'); setButtonBack1('');setButtonBack3('')} }>
        <Icon icon={locationIcon2} className="icons"/>
      </button>
      <button className="buttons volcano" style={{backgroundColor:buttonBack3}} onClick={() =>{setMarkType(15); setButtonBack3('green');setButtonBack2('');setButtonBack1('')} }>
        <Icon icon={locationIcon3} className="icons"/>
      </button>

    
      {
        !loading ? <Map eventData={eventData} markType={markType} /> : <h1><Loader /></h1>
      }
      
    </div>
  );
}

export default App;
