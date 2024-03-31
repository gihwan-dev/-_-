import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>항해 플러스 리액트 SEO 테스트.</title>
        <meta
          name="description"
          content={"항해 플러스 리액트 SEO 적용 과제 솔루션 입니다."}
        />
        <meta
          property="og:title"
          content={"오픈 그래프 타이틀."}
        />
        <meta
          property="og:description"
          content={"오픈 그래프 설명"}
        />
        <meta
          property="og:image"
          content={
            "https://plus.unsplash.com/premium_photo-1686149758342-9f0f249f2989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
          }
        />
        <meta
          property="og:url"
          content={""}
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          name="twitter:title"
          content={"트위터 타이틀"}
        />
        <meta
          name="twitter:description"
          content={"트위터 설명"}
        />
        <meta
          name="twitter:image"
          content={
            "https://plus.unsplash.com/premium_photo-1686149758342-9f0f249f2989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
          }
        />
        <meta
          name="twitter:card"
          content={
            "https://plus.unsplash.com/premium_photo-1686149758342-9f0f249f2989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
          }
        />
      </Helmet>
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
