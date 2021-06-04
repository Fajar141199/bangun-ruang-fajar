import './App.css';
import React, { useState } from "react";
import AmbilNilai from './AmbilNilai';


function App() {
  
  var [panjang, intPanjang] = useState("")
  var [lebar, intLebar] = useState("")
  var [tinggi, intTinggi] = useState("")

    var rubahpanjang = (event) => {
      intPanjang(event.target.value)
    }

    var rubahLebar = (event) => {
        intLebar(event.target.value)
    }

    var rubahTinggi = (event) => {
      intTinggi(event.target.value)
    }

  return (
    
    <div className="App">

      <img src="images/logo.png" alt="logo" srcSet="" width="200px"/>
      
 
      
      <p>Tugas React </p>
        <p>Fajar Hasby Alwafi</p>
        <p>0701182096</p>
        <p>MENGHITUNG LUAS VOLUME DAN KELILING BALOK  </p>

      <p> Masukkan Panjang : </p>
      <input type="int"
             onChange={rubahpanjang}>
      </input>
    <p> Masukkan Lebar : </p>
    <input type="int"
           onChange={rubahLebar}>
    </input>
    <p> Masukkan Tinggi : </p>
      <input type="int"
             onChange={rubahTinggi}>
      </input>
        <AmbilNilai
            
            LUAS = {2*[Number(panjang*lebar)+ Number(panjang*tinggi)+Number(lebar*tinggi)]}


            VOLUME = {panjang*lebar*tinggi}
            KELILING = {4* [Number(panjang)+Number(lebar) + Number(tinggi)] }
        />
      <p>Di Sponsor Oleh</p>
      <img src="images/logo aksor 12.png" alt="logo aksor 12" srcSet="" width="200px"/>
    </div>
  );
}

export default App;
