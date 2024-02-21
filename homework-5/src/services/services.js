// Working
export async function fetchDataCountries(link = "https://655655bc84b36e3a431f9829.mockapi.io/countries") {
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
// Working
export async function fetchDataListDelete(id) {
  await fetch(`https://655655bc84b36e3a431f9829.mockapi.io/countries/${id}`, {
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
