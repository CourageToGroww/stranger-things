//HANDLERS

//Handlers for navigation and rendering
//show get rid of the login form and show the register form
export const handleRegisterClick = (setShowLoginForm, navigate) => () => {
  setShowLoginForm(false);
  navigate("/register");
};

export const handlePostsClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/posts");
};

export const handleProfileClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/profile");
};

export const handleHomeClick = (setShowLoginForm, navigate) => {
  setShowLoginForm(false);
  navigate("/");
};

//Handlers for login logic
export const handleLoginClick = (navigate) => {
  navigate("/login");
};

export const handleLoginFormClose = (setShowLoginForm) => () => {
  setShowLoginForm(false);
};

export const loginSuccessful = (result) => {
  //ADD TO THIS LATER
  if (!result || !result.success) {
    return false;
  }
  return result && result.success;
};

//THEME

//handlers for dark/light mode
export const toggleTheme = (setTheme) => {
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
};

//handlers for registration logic

export const handleRegChange = (e, formData, setFormData) => {
  const { id, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [id]: value }));
};

export const handleRegSubmit = async (
  e,
  formData,
  setMessage,
  setIsRegistered
) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setIsRegistered(true);
    } else {
      setMessage(data.error);
    }
  } catch (error) {
    setMessage("An error occurred while registering. Please try again.");
  }
};

//helper function to get the display name of a component

export const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};
