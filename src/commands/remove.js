import { readData, saveData } from "../utils/fileUtils.js";

const data = readData();

export const removeTask = (idTask) => {
  const index = data.findIndex((task) => task.id === Number(idTask));
  if (index === -1) throw new Error(`Task with ID ${idTask} not found.`);

  data.splice(index, 1);
  console.log(`Task with ID ${idTask} deleted.`);
  saveData(data);
};
