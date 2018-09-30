export const authAction = (payload = false) => {
  return {
    type: "AUTH",
    payload
  };
};
