import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(){
  return (
    <div>
      <hr/>
      {this.props.masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  masterTicketList: PropTypes.array
};

export default TicketList;
