import { services } from '../../data';

export default (req, res) => {
  // BY default, it's a GET request

  //! complex backend logic :(
  console.log('API', services);

  res.status(200).json({ services });
};
