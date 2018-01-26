import ticketList from './../../src/reducers/ticket-list-reducer';

describe("Ticket list reducer", () => {

  test('should return equivalent state if no action type is recognized', () => {
    expect(ticketList([], { type: null })).toEqual([]);
  });

});
