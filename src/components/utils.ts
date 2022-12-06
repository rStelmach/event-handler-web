import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { addEvents } from '../store/eventSlice';
import { EventRequest } from '../types/events';

export const getEvents = async (dispatch: Dispatch) => {
  const response = await axios.get('http://localhost:5000/getEvents');
  dispatch(addEvents(response.data.body.events));
};

export const addEvent = async (dispatch: Dispatch, modalEntries: EventRequest) => {
  try {
    await axios.post('http://localhost:5000/addEvent', modalEntries);
    const response = await axios.get('http://localhost:5000/getEvents');
    dispatch(addEvents(response.data.body.events));
  } catch (err) {
    alert(err);
  }
};

export const deleteEvent = async (dispatch: Dispatch, id: number) => {
  try {
    await axios.post('http://localhost:5000/deleteEvent', { id });
    const response = await axios.get('http://localhost:5000/getEvents');
    dispatch(addEvents(response.data.body.events));
  } catch (err) {
    alert(err);
  }
};
