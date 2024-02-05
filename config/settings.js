const settings = {
  dev: {
    apiUrl: "http://localhost:8080/api/v1",
  },
  prod: {
    apiUrl: "https://ncc-app-production.up.railway.app/api/v1",
  },
};

const getCurrentSettings = () => {
  if (process.env.NODE_ENV === "development") return settings.dev;

  return settings.prod;
};

export default getCurrentSettings();
