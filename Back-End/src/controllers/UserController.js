// import * as Yup from 'yup';
// import User from '../models/User';

// const store = async (request, response) => {
//   const schema = Yup.object().shape({
//     email: Yup.string().email().required(),
//     password: Yup.string().required().min(6),
//   });

//   try {
//     await schema.validate(request.body, { abortEarly: false });
//   } catch (err) {
//     return response.status(400).json({ error: err.errors });
//   }

//   const { email, password } = request.body;

//   const userExist = await User.findOne({ email });

//   if (userExist) {
//     return response.status(409).json({
//       error: 'Esse e-mail já existe',
//     });
//   }

//   const user = await User.create({ email, password });

//   return response.status(201).json({
//     id: user._id,
//     email: user.email,
//   });
// };

// export default { store };
