import axios from "axios";

const client = axios.create({
  baseURL: "https://careme-api.trustmacus.com",
});

function search(query: string) {}
function createProfile(profile: string) {}

export { search, createProfile };
