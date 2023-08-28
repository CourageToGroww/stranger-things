export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      return { success: true, user: data.user };
    } else {
      // Handle error from the server
      return { success: false, message: data.error || "An error occurred" };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while logging in. Please try again.",
    };
  }
};
