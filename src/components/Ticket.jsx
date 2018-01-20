import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
      <div>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
  );
}

Ticket.propTypes = {
  names: React.PropTypes.string.isRequired,
  location: React.PropTypes.string.isRequired,
  issue: React.PropTypes.string
};

export default Ticket;
