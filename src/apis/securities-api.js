import axios from "axios";

const client = axios.create({
  baseURL: "https://careme-api.trustmacus.com",
});

async function login(email, isWorker) {
  const response = await client.post("/security/requestotp", {
    email: email,
    isWorker: isWorker,
  });
  return response.data;
}
async function validateOtp(email, ref, otp, isWorker) {
  const response = await client.post("/security/validatetoken", {
    email: email,
    refId: ref,
    otp: otp,
    isWorker: isWorker,
  });
  return response.data;
}

export { login, validateOtp };
