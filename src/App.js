import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import  {Provider}  from 'react-redux';
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from './components/WatchPage';

const App = () => {

  const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<Body/>,
    children:[
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },


    ]

}])
  return (
    <Provider store = {store}>
    <div className="App">
     <Head />
     <RouterProvider router={appRouter} />
    </div>
 

 {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
     </Provider>   
  )}; 

export default App;
