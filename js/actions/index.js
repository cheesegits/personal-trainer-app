export const TRAINER_NAME = "TRAINER_NAME";
export const trainerName = newName => {
  console.log("trainerName action triggered with payload: ", newName);
  return {
    type: TRAINER_NAME,
    payload: newName
  };
};

export const CLIENT_NAME = "CLIENT_NAME";
export const clientName = newName => {
  return {
    type: CLIENT_NAME,
    payload: newName
  };
};
