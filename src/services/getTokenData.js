
export const getTokenData = (token) => {
  try {
    const payloadBase64 = token.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
  } catch (error) {
    if (error.message.includes("jwt expired")) {
      console.error("token expired", error);
    }
    console.error(error.message);
    return null;
  }
};
