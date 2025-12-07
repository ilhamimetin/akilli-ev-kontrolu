import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./lib/firebase";
import { onValue, ref } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getTemperatureColor,
  getTemperatureStatus,
} from "./utils/temperatureUtils.js";

function App() {
  const [living_room, SetLiving_room] = useState(0);
  const [allTemperature, setAllTemperature] = useState([]);

  useEffect(() => {
    const living_room_ref = ref(db, "devices/temperature/living_room");
    const allTemperature_ref = ref(db, "devices/temperature");
    onValue(living_room_ref, (snapshot) => {
      SetLiving_room(snapshot.val());
    });
    onValue(allTemperature_ref, (snapshot) => {
      setAllTemperature(snapshot.val());
    });
  }, []);

  return (
    <>
      <div>ilhami</div>
      <div>{living_room}</div>
      <hr />
      <div>
        {Object.entries(allTemperature).map(([key, value]) => (
          <h1 key={key}>
            {key} : {value}
          </h1>
        ))}
      </div>

      <div className="row">
        {Object.entries(allTemperature).map(([room, temp]) => (
          <div className={`card ${getTemperatureColor(temp)} mb-2`} key={room}>
            <div className="card-body">
              <h5 className="card-title">{room}</h5>
              <h2 className="card-text">{temp}°C</h2>
              <i>{getTemperatureStatus(temp)}</i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
