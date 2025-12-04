import { useEffect, useState } from "react";
import "./App.css";
import { app } from "./lib/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const db = getDatabase(app);
  const testRef = ref(db, "devices/test/deneme/ad");
  const [value, setValue] = useState("");
  console.log(value);

  useEffect(() => {
    const veri = async () => {
      await onValue(testRef, (snapshot) => {
        snapshot.val();
        setValue(snapshot.val())
        console.log(value);
      });
    };     
    veri();
  },[]);

  return (
    <>
      <h1>ilhami</h1>
      <h1>ilhami</h1>
      <b> {value} </b>
    </>
  );
}
export default App;
