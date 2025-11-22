export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/v1/contact/contact/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};