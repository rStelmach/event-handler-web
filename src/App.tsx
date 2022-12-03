import { Provider } from 'react-redux';
import { EventList } from './components/EventList';
import { EventModal } from './components/EventModal';
import { store } from './store/store';
import './App.scss';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <EventModal />
        <EventList />
      </Provider>
    </>
  );
};

export default App;
