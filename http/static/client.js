// Get the button element
const btn = document.getElementById("btn");

// Add a click event listener to the button
btn.addEventListener("click", async () => {
  // edit this request as you like to learn how HTTP works!å
  const request = new Request("http://localhost:8000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // note that the fetch API is another web standard
  // https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
  const response = await fetch(request)

  console.log(response)
});