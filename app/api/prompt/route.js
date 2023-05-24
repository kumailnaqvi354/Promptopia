import Prompt from "@models/prompt";
import User from "@models/user";

const { connectToDB } = require("@utils/database");

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find();
    console.log("prompt", prompts);
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
