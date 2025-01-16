import { readData, saveData } from "../utils/fileUtils.js";

const data = readData();

export const updateTask = (idTask, newDesc) => {
  const newTask = data.find((task) => task.id === Number(idTask));
  if (!newTask) {
    console.log(`Task with ID ${idTask} not found.`);
    return null;
  }

  if (newDesc) newTask.description = newDesc;
  console.log(`Task with ID ${idTask} modified.`);

  saveData(data);
};

export const changeStatus = (idTask, newStatus) => {
  const newTask = data.find((task) => task.id == Number(idTask));
  if (!newTask) {
    console.log(`Task with ID ${idTask} not found.`, newStatus);
    return null;
  }

  newTask.status = newStatus;
  console.log(`The status of the task with ID ${idTask} was modified.`);

  saveData(data);
};
