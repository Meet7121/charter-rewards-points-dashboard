export const getRewardPoints = async () => {
  const response = await fetch("./rewards.json");
  const data = await response.json();
  return data.rewards;
};
