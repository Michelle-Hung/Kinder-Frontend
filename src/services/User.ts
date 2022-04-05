import axios from "axios";

type LoginResponse = {
  success: boolean;
};

export async function LoginAsync(name: string, password: string) {
  try {
    const { data } = await axios.post<LoginResponse>(
      "https://localhost:5001/user/Login",
      { name: name, password: password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return { data };
  } catch (error) {
    const errorMessage: LoginResponse = {
      success: false,
    };
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
    } else {
      console.error("unexpected error: ", error);
    }
    return { errorMessage };
  }
}
