import { toast } from "react-toastify";
import axios from "axios";

export const contactUsPost = async (details) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/add_user`,
      details,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    toast.error("Error while sending message!");
  }
};
