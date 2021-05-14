import rentals from '../../../lib/rentals.js';

export function get({ params }) {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      data: rentals.find(rental => rental.id === params.rental_id),
    }
  }
};
