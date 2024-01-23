import List from "../constants/interfaces.js";

// +
export async function fetchDataList(link: string) {
  try {
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);

    return null;
  }
}

// +
export async function fetchDataListDelete(link: string) {
  await fetch(link, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", 
    },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.json();
    return data;
  })
  .catch((error) => {
    console.error("Error deleting resource:", error.message);

    return null;
  });
}

// +
export async function fetchDataListUpdate(link: string, data: List) {
  await fetch(link, {
    method: "PUT", // or PATCH
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.json();
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error("Error deleting resource:", error.message);
    return null;
  });
}

// +
export async function fetchDataListCreate(link: string, newTask: {title: string, completed: boolean}) {
  await fetch(link, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = response.json();
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.error("Error deleting resource:", error.message);
    return null;
  });
}


