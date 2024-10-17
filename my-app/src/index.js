import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PerformanceMemoCallback from './performanceMemoCallback';
// import Service from './authService';
// import WithLogComp from './withLogComp';
// import UseRef from './useref';
// import CartManage from './cartmanage';
// import ShopCart from './shopCart';
// import Crud from './crud';
// import FetchData from './fetchData';
// import CounterApp from './counterApp';
// import CounterReducer from './counterAppReducer';
// import CrudUsingReducer from './crudUsingReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*Component to manage the CRUD Operation using useState <Crud/> */}
    {/*Handling the search by name  <FetchData/> */}
    {/* {<CounterApp/>} */}
    {/* <CounterReducer/> */}
    {/* <CrudUsingReducer/> */}
    {/* <ShopCart/> */}
    {/* <CartManage/> */}
    {/* <UseRef/> */}
    {/* <Service/>
    <WithLogComp/> */}
    <PerformanceMemoCallback/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
