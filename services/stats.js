import client from "./client";

const getAppStats = async () => client.get("/admin/app-stats");

export default { getAppStats };
