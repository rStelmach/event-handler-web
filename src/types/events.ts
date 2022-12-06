export interface EventEntry {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}
export interface Event extends Omit<EventEntry, 'date'> {
  id: number;
  date: string;
}
export interface StateEvent {
  event: {
    value: Event[];
  };
}
export interface EventRequest extends Omit<EventEntry, 'date'> {
  date: string;
}
