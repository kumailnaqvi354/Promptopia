import Prompt from "@models/prompt";

const { connectToDB } = require("@utils/database");

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
