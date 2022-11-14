import { useEffect, useState } from "react";


export default function WithWebWorker() {
  const [res, setRes] = useState(0)
  useEffect(() => {
    console.log('mounted')
    const myWorker = new Worker('worker.tsx');
    myWorker.postMessage("start");
    myWorker.onmessage= (e)=>{
      setRes(e.data)
    }
  },[])
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Mounted! : {res === 0 ? 'Loading...' : res}</h1>
      <img src="https://media.tenor.com/t4HIrZDwx8AAAAAd/doc-brown-it-works.gif"></img>
    </div>
  )
}