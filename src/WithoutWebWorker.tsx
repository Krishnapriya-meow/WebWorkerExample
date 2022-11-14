import  { useEffect, useState } from "react";




export default function WithoutWebWorker() {
  const [res, setRes] = useState(0)
  const initiateLoop = () => {
    let count = 0;
    for (let i = 0; i < 5000000000 * 2; i++) {
      count += 1;
    }
    return count
  }
  useEffect(() => {
    setRes(initiateLoop())
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Mounted without WebWorker! : {res === 0 ? 'Loading...' : res}</h1>
      <img src="https://media.tenor.com/6Rkzf4LkgVkAAAAC/kevin-hart-stare.gif"></img>
    </div>
  )
}
