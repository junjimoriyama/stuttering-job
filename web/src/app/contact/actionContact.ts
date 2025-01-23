"use server";

export const sendContactAction = async(contactData: any) => {
  try {
    // const res = await fetch(`http://localhost:3000/api/v1/contact_data`, {
    const res = await fetch(`${process.env.API_URL}/api/v1/contact_data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({contact: contactData})
    })

    const data = await res.json()

    console.log(data)
  } catch (error) {
    
  }
}

// test1@gmail.com
// 問い合わせ１