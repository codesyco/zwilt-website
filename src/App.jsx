import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.css";
import route from "./Route/Routes.jsx";
import store from './App/store.js';

function App() {
  return (
    <Provider store={store}> 
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;

