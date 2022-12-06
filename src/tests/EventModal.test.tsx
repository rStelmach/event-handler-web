import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { EventModal } from '../components/EventModal';
import { store } from './__mocks__/mockedStore';

describe('Component EventModal', () => {
  render(
    <Provider store={store}>
      <EventModal />
    </Provider>,
  );
  it('Should render form properly', () => {
    const title = screen.getByTitle('modalForm');
    expect(title).toBeInTheDocument();
  });
});
