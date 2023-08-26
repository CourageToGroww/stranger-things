export const logout = async () => {
  try {
    const response = await fetch("/api/logout", { method: "POST" });
    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Logout failed.");
    }
  } catch (error) {
    return { success: false, error };
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      return { success: true, user };
    } else {
      throw new Error("Registration failed.");
    }
  } catch (error) {
    return { success: false, error };
  }
};
