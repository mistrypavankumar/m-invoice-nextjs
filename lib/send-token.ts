import { NextApiResponse } from "next";

// Define the user type based on your user model
interface User {
  getJWTToken: () => string;
  // Add other properties and methods of your user model as needed
}

// Define the type for the message
type Message = string;

const sendToken = (
  user: User,
  statusCode: number,
  res: NextApiResponse,
  msg: Message
): void => {
  const token = user.getJWTToken();

  // Options for cookies
  const options = {
    expires: new Date(
      Date.now() + parseInt(process.env.COOKIE_EXPIRE!) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(statusCode)
    .setHeader(
      "Set-Cookie",
      `token=${token}; Path=/; Expires=${options.expires.toUTCString()}; HttpOnly`
    );
  res.status(statusCode).json({
    success: true,
    message: msg,
    user,
    token,
  });
};

export default sendToken;
