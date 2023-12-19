import axios from "axios";

export const generateDayPlan = async (userInfo) => {
  return await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",

          content: `Generate a JSON-formatted list of activities for my day plan. Consider the following criteria:

            - Personality: I am ${
              userInfo?.personality == 100
                ? "an Extrovert"
                : userInfo?.personality == 0
                ? "an Introvert"
                : "neither an Introvert or Extrovert"
            }.
            - Interests: I like activities such as ${userInfo?.Interests}.
            - Location: My current location is ${userInfo?.location}.
            - Preferred mode of movement: I prefer ${
              userInfo?.preferred_vehicle
            }ing.
            - Diet type: My diet type is ${userInfo?.diet_type}.
            - Cuisine enjoyment: I enjoy ${userInfo?.cuisine_type} cuisine.
            - Budget: My budget is around ${userInfo?.budget} euros.
            - Crew: I'll be going with my ${userInfo?.crew}.
            - Mood: My mood is ${userInfo?.mood}.
            - Lactose intolerance: I ${
              userInfo?.lactose_intolerance ? "am" : "am not"
            } lactose intolerant.
            - Gluten intolerance: I ${
              userInfo?.gluten_intolerance ? "am" : "am not"
            } gluten intolerant.
            - Fructose intolerance: I ${
              userInfo?.fructose_intolerance ? "am" : "am not"
            } fructose intolerant.
            
            Assign a time slot between 9 am and 9 pm to each activity. Consistently include the following properties for each activity:
            
            - Title
            - Description
            - Time (in the format 9:00 AM)
            - Address
            - Category (food, activities, break, viewpoints)
            - Break Suggesstion (Place and address)
            
            Ensure each activity follows the format: { "title": "...", "description": "...", "time": "...", "address": "...", "category": "...", "break": "..." }.

            Then include in the json a summary with not more than 30 words of the day's activity .
            `,
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
