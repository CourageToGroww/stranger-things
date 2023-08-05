//setting up API url variable
const API_URL = "https://strangers-things.herokuapp.com/api/";

//adding this to the main branch because its a good first function to write, imo. since we know we will need it throughout the app and its going to fetch the posts from the API
export async function getPosts() {
  try {
    const response = await fetch(`${API_URL}posts`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
