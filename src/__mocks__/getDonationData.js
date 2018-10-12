module.exports = {
  getDonationData: () => {
    return Promise.resolve({
      data: [
        {
          amount: 5,
          donorDisplayName: 'Louis Moselhi'
        },
        {
          amount: 10,
          donorDisplayName: 'Elon Musk'
        },
        {
          amount: 1,
          donorDisplayName: 'The Donald'
        },
        {
          amount: 200,
          donorDisplayName: 'Stephen Hawking'
        }
      ]
    });
  }
};
