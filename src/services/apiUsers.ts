import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const token = {
  headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
};

const addMentorPost = async (name: string, email: string, cpf: string) => {
  try {
    await client.post(
      "/mentors",
      {
        name,
        email,
        cpf,
      },
      token
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { addMentorPost };
