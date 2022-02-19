export const postReq = async (payload) => {
  const result = await fetch(`http://localhost:1337/api/first`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await result.json();
};

