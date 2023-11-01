import logo from './logo.svg';
import './App.css';
import Compobody from './component/style/Compobody';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import PureComp from './component/PureComponent';
import RegularComp from './component/RegularComponent';
import ParentComp from './component/ParentComponent';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import ForwardingRefPare from './component/ForwardingRefPare';
import PortalDemo from './component/PortalDemo';
import HigherOrderComponent from './component/ClickCounter';
import HigherOrderComponent2 from './component/HoverCounter';
import ClickCounter from './component/ClickCounter';
import RenderProps1 from './component/ClickCounter2';
import RenderProps2 from './component/HoverCounter2';
import RenderProps3 from './component/UserCounter';
import RenderProps4 from './component/Counter3';
import ContextC from './component/ComponentC';
import { UserProvider } from './component/UserContext';



function App() {
  return (
    <div className="App">
       {/* <Compobody></Compobody> */}

       {/* <FragmentDemo></FragmentDemo> */}

       {/* <Table></Table> */}

       {/* <ParentComp></ParentComp> */}

       {/* <RefsDemo></RefsDemo> */}

       {/* <FocusInput></FocusInput> */}

       {/* <ForwardingRefPare></ForwardingRefPare> */}

       {/* <PortalDemo></PortalDemo> */}

       {/* <HigherOrderComponent></HigherOrderComponent>
       <HigherOrderComponent2></HigherOrderComponent2> */}

       {/* <RenderProps1></RenderProps1>
       <RenderProps2></RenderProps2> */}
       {/* A function that will return the name Vishwas, which is what Render Props is based on */}
       {/* <RenderProps3 render = { (isloggedIn) => isloggedIn ? 'Vishwas' : 'Guest'} ></RenderProps3> */}
       {/* <RenderProps4 render = {(count, incrementCount) =>
         <RenderProps2 count = {count} incrementCount = {incrementCount} ></RenderProps2>} >
       </RenderProps4>
       <RenderProps4 render = {(count, incrementCount) =>
         <RenderProps1 count = {count} incrementCount = {incrementCount} ></RenderProps1>} >
       </RenderProps4> */}

       {/* This is step two, wrapping ContextC with UserProvider */}
       {/* the provider component is responsible for providing a value for all the 
        descendant components, the value we want to provide is the username */}
       <UserProvider value='Viswas'>
         <ContextC></ContextC>
       </UserProvider>

       {/* ......................................... */}
    
    </div>
  );
}

export default App;
