import { verify } from '../../../utils/jwt';

export default async (req, res) => {
  try {
    const { cookies } = req;
    verify(cookies.token);
    res.status(200).json({
      code: 200,
      message: 'success',
      data: [
        {
          id: '0',
          user_id: '02d90bf8-c82c-4eb1-8dc8-d3cc8a82b1fd',
          name: 'lacoste',
          currency: 'IDR',
          balance: 9999999,
          created_at: '2022-11-22T23:31:27.370Z'
        },
        {
          id: '1',
          user_id: '02d90bf8-c82c-4eb1-8dc8-d3cc8a82b1fd',
          name: 'lacoste',
          currency: 'IDR',
          balance: 9999999,
          created_at: '2022-11-22T23:31:27.370Z'
        }
      ]
    });
  } catch (error) {
    console.log(error);
  }
};
