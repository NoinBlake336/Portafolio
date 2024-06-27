import { Provider } from 'react-redux';
import { GlobalStyle } from './Global/GlobalStyle';
import Routes from './routes/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { persisted, store } from './redux/store';

function App() {

  return (
    <>
    <Provider store={store}>
        <PersistGate persistor={persisted}>
          <Routes/>
          <GlobalStyle/>
        </PersistGate>
    </Provider>
    </>
  );
}

export default App;
