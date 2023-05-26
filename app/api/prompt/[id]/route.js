import Prompt from "@models/prompt";

const { connectToDB } = require("@utils/database");
// GET(READ)

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// PATCH (UPDATE)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to update the prompts", { status: 500 });
  }
};

// DELETE (delete)
export const DELETE = async (request, { params }) => {
  await connectToDB();
  try {
    await Prompt.findByIdAndDelete(params.id.toString());
    return new Response("Prompt Deleted Succefully", { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to Delete prompts", { status: 500 });
  }
};
