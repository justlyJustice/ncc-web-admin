import client from "./client";

const getAllCalls = async () => client.get("/admin/calls");

export default { getAllCalls };
