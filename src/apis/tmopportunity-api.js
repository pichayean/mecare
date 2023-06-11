import axios from "axios";

const client = axios.create({
  baseURL: "https://careme-api.trustmacus.com",
});

async function getall() {
  const response = await client.get("/opportunity/list");
  return response.data;
}

export { getall };
