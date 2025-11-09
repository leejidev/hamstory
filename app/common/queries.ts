import client from "~/supa-client";

export const getBestItems = async () => {
  const { data, error } = await client
    .from("items")
    .select("*")
    .order("stats->>upvotes", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};
