import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
//provider cho phép định cấu hình ứng dụng để redux store có sẵn cho tất cả các cpn trong ứng dụng
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      //bọc provider bên ngoài browser route, provider lấy 1 thuộc tính là thuộc tính store
      //đảm bảo rằng store có sẵn trong các cpn
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
