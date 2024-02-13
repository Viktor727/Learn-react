export async function fetchUsers() {
  try {
    const response = await fetch("https://65a040c2600f49256fafc441.mockapi.io/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Error:", error);

    return null;
  }
}

export async function deleteUser(id: number | string) {
  
  try {
    const response = await fetch(`https://65a040c2600f49256fafc441.mockapi.io/posts/${id}`, {method: 'DELETE',});

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Error:", error);

    return null;
  }
}

