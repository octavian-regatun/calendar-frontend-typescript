import Config from "./interfaces/config.interface";

const config: Config = {
  BACKEND_URI: process.env.REACT_APP_BACKEND_URI as string,
  GOOGLE: {
    CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
  },
};

export default config;
