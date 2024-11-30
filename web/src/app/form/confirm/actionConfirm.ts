export const sendAction = async(id: any) => {
  const res = await fetch(`http://localhost:3000/api/v1/inputs/${id}`, {
    method: "GET",
  });

  if (res.ok) {
    // success: true
    const data = await res.json();
    console.log(data);
  }

}