import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EventEntry, EventRequest } from '../types/events';
import { addEvent, getEvents } from './utils';
import './EventModal.scss';

export const EventModal = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    firstName: yup.string().max(20).required('First name is required'),
    lastName: yup.string().max(20).required('Last name is required'),
    email: yup.string().email().max(30).required('Provide a valid email'),
    date: yup.date().typeError('Please enter a valid date').min(new Date(), 'Date cannot be in the past').required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventEntry>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (modalEntry: EventEntry) => {
    const eventRequest: EventRequest = { ...modalEntry, date: modalEntry.date.toLocaleDateString('en-GB') };
    addEvent(dispatch, eventRequest);
  };

  useEffect(() => {
    getEvents(dispatch);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="modal">
        <div className="input">
          <input type="text" placeholder="First Name" className="textInput" {...register('firstName')} />
          {errors.firstName && <p className="error-message">{errors.firstName?.message}</p>}
        </div>
        <div className="input">
          <input type="text" placeholder="Last Name" className="textInput" {...register('lastName')} />
          {errors.lastName && <p className="error-message">{errors.lastName?.message}</p>}
        </div>
        <div className="input">
          <input type="email" placeholder="Email" className="textInput" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email?.message}</p>}
        </div>
        <div className="input">
          <input type="date" placeholder="date" className="textInput" {...register('date')} />
          {errors.date && <p className="error-message">{errors.date?.message}</p>}
        </div>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
