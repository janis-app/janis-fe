import axios from "axios";

export const generateDayPlan = async (userInfo) => {
  return await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            `Generate a list of activities with for my day plan based on the following criteria, I am ${userInfo?.personality == 100 ? "an Extrovert" : userInfo?.personality == 0 ? "an Introvert" : "neither an Introvert or Extrovert" }, i like activities such as ${userInfo?.Interests}, my location is ${userInfo?.location}, my preferred mode of movement is ${userInfo?.preferred_vehicle}ing, my diet type is ${userInfo?.diet_type} and i enjoy ${userInfo?.cuisine_type} cuisine. My budget is around ${userInfo?.budget} euros, i'll be going with my ${userInfo?.crew} and my mood is ${userInfo?.mood}, i ${userInfo?.lactose_intolerance ? "am" : "am not"} lactose intolerant,  i ${userInfo?.gluten_intolerance ? "am" : "am not"} gluten intolerant and  i ${userInfo?.fructose_intolerance ? "am" : "am not"} fructose intolerant. Assign a time slot between 9 am and 9 pm to each activity, consistently include one of the following categories (food, activities, break, viewpoints) for each activity, and present each activity as a JSON value. Ensure each activity begins with a title followed by a time and then the category enclosed in brackets.`,
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_KEY,
      },
    }
  );
};
