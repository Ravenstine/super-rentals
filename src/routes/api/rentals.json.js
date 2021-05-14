import rentals from '../../lib/rentals.js';

export function get() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      data: rentals,
    }
  }
};
