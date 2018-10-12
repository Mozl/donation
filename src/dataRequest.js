export const getDonationData = () => {
  return fetch(
    `https://api.justgiving.com/beb9b39c/v1/charity/13441/donations`,
    { headers: { 'Content-Type': 'application/json' } }
  ).then(res => res.json());
};

export default getDonationData;
