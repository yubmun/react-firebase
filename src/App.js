import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';


function App() {

  /**
   * BrowserRouter 컴포넌트는 UI 와 URL 을 연결한다.
   * Route 컴포넌트는 현재 URL과 매칭된 UI를 렌더링 하는 역할을 한다.
   * Routes 컴포넌트는 URL이 변경되면 <Routes>의 모든 자식인 <Route>를 살펴보고 가장 알맞은 것을 매칭한다.
   * BrowserRouter는 페이지를 라우팅 할 때 실제로 URL에 html파일이 존재하지 않지만, 그런것처럼 보여주며 페이지를 이동하고 검색엔진 로봇에도 웹사이트를 탐색할때 크롤링이 가능하다. 단, 모든 브라우저에서 호환이 되지 않으며 IE9 이하는 지원하지 않는다.
   * HashRouter는 #으로 URL주소값에 넣어주는데, #은 원래 현재 파일이라는 의미라 다른 폴더로 넘어가는 듯한 구조를 보이지는 않는다. 로봇을 통한 크롤링이 불가능하지만 모든 브라우저 (레거시 브라우저) 에서 작동이 가능하다. 우리가 회사에서는 HashRouter를 볼지도 모른다.
  */
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
