import './Ticket.css';
import Header from './Header'
import Animation from './Animation'
import Time from './Time'
import ExpiryDate from './ExpiryDate'
import Destinations from './Destinations';
import React from 'react';

interface TicketProps {
  ticketProps: string[];
}

const Ticket: React.FC<TicketProps> = ({ticketProps}) => {
  const animationProps = [ticketProps[0], ticketProps[1], ticketProps[2], ticketProps[3]];
  const destinationProps = [ticketProps[4], ticketProps[5]];
  return (
    <div className="App">
      <Header />
      <Animation animationProps={animationProps}/>
      <Time />
      <ExpiryDate />
      <Destinations destinationProps={destinationProps}/>
    </div>
  );
}

export default Ticket;
