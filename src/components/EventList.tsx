import { useDispatch, useSelector } from 'react-redux';
import { Event, StateEvent } from '../types/events';
import { deleteEvent } from './utils';
import './EventList.scss';

export const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: StateEvent) => state.event?.value);

  return (
    <div className="list">
      <h1 title="eventTitle">Events:</h1>
      {events && events.length > 0 ? (
        events.map((event: Event, index: number) => {
          return (
            <ul className="event" key={(event.id, index)} title="event">
              <li>
                <span className="label">Name:</span>
                {`${event.firstName} ${event.lastName}`}
              </li>
              <li>
                <span className="label">Email:</span>
                {event.email}
              </li>
              <li>
                <span className="label">Date:</span>
                {event.date}
              </li>
              <button onClick={() => deleteEvent(dispatch, event.id)}>Delete</button>
            </ul>
          );
        })
      ) : (
        <h2>No events</h2>
      )}
    </div>
  );
};
