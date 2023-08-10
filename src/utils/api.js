//setting up API url variables
export const COHORT_NAME = "2302-ACC-CT-WEB-PT-A";
export const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*
added this to the main branch because its a good first function to write, imo. since we know we will need it throughout the app and its going to fetch the posts from the API
adding null to the token as default value in parameter of getPosts 
*/
export async function getPosts(token = null) {
  try {
    const response = await fetch(`${API_URL}posts`, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null; // using console.error so returning null, i like this error handling approach better
  }
}
