import { readData } from "../utils/fileUtils.js";

const data = readData();

export const listTasks = () => {
  console.log("Task list: ");
  data.forEach((task) => {
    console.log(`- ${task.description}`);
  });
};

export const listTasksByCompletedStatus = (status) => {
  const filteredTasks = data.filter((task) => task.status === status);
  const text =
    status === "done"
      ? "done"
      : status === "not done"
      ? "not done"
      : "in progress";

  if (filteredTasks.length > 0) {
    console.log(`Task list ${text}:`);
    filteredTasks.forEach((task) => {
      console.log(`- ${task.description}`);
    });
  } else {
    console.log(`There are no tasks ${text}.`);
  }
};
