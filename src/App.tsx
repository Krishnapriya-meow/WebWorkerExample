import  { useState } from 'react';
import './App.css';
import { Button, Layout, Typography } from "antd";
import { UserInterface } from './modal';
import WithWebWorker from './WithWebWorker';
import WithoutWebWorker from './WithoutWebWorker';

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {

let intialValue = new UserInterface()
const [state,setState] = useState(intialValue)

  return (
    <div className="App">
      <Layout
        style={{
          display: "flex",
          height: "100vh",
          minHeight: "100vh",
        }}
      >
        <Header>
          <Title style={{ color:"blue" }}>Web Workers Example</Title>
        </Header>
        <br/>
        <Content style={{ flex: 1, overflow: "scroll", padding: "1rem 3rem" }}>
          <div
            style={{
              position: "sticky",
              background: "brown",
              padding: 25,
              top: 0,
            }}
          >
            <Button
              type="default"
              onClick={() => {
                setState({ UI: "THREADED" });
              }}
            >
              With WebWorker
            </Button>
            &nbsp;&nbsp;
            <Button
              onClick={() => {
                setState({ UI: "UN_THREADED" });
              }}
            >
              Without WebWorker
            </Button>
          </div>
          <div style={{ display: "flex", flex: 1, overflow: "scroll" }}>

            {state.UI === "UN_THREADED" ? <WithoutWebWorker/> : null}
            {state.UI === "THREADED" ? <WithWebWorker /> : null}
          </div>
        </Content>
        </Layout>
    </div>
  );
}

export default App;
