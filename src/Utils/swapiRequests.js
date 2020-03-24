const axios = require("axios");

const getUrl = async url => {
  const newUrl = url;
  let _isMounted = true;
  try {
    const response = await axios.get(newUrl);
    if (_isMounted) {
      _isMounted = false;
      return response.data;
    }
  } catch (error) {
    throw Error("Error fetching data");
  }
};

export default getUrl;