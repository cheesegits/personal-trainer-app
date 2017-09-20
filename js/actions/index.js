export const TRAINER_NAME = "TRAINER_NAME";
export const trainerName = newName => {
  console.log("trainerName action triggered with payload: ", newName);
  return {
    type: TRAINER_NAME,
    payload: newName
  };
};
