import { readData, writeData } from "../utils/fileUtils.js";

export const addTask = (descTask) => {
  const data = readData();
  const statusType = "not done";

  const newTask = {
    id: Date.now(),
    description: descTask,
    status: statusType,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  data.push(newTask);
  writeData(data);
  console.log(`Task ${newTask.description} added.`);
};
