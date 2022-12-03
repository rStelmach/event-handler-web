import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import { EventList } from '../../components/EventList';

describe('EventList', () => {
  const { queryByTitle } = render(<EventList />);

  it('checkEventListRenderer', () => {
    const eventUl = queryByTitle('event');
    expect(eventUl).toBeTruthy();
  });
});
