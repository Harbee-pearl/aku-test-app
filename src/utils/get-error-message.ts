export const getErrorMessage = (error: any) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  } else if (error?.data?.message) {
    return error.data.message;
  } else if (error?.message) {
    return error.message;
  } else {
    return null;
  }
};
