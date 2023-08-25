//setting up API url variables
export const COHORT_NAME = "2302-ACC-CT-WEB-PT-A";
export const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

/*
This is where I was going to pull all of the post from the FSA API and throw them to my frontend /posts route 
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
