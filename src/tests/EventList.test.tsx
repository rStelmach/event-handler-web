import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { EventList } from '../components/EventList';
import { store } from './__mocks__/mockedStore';

describe('Component EventList', () => {
  render(
    <Provider store={store}>
      <EventList />
    </Provider>,
  );
  it('Should render Events component ', () => {
    const title = screen.getByTitle('eventTitle');
    expect(title).toBeInTheDocument();
  });
});
