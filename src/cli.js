#!/usr/bin/env node

import { addTask } from "./commands/add.js";
import { listTasks, listTasksByCompletedStatus } from "./commands/list.js";
import { removeTask } from "./commands/remove.js";
import { updateTask, changeStatus } from "./commands/update.js";

const args = process.argv.slice(2);
const command = args[0];
const param1 = args[1];
const param2 = args[2];
const param3 = args[3];

switch (command) {
  case "add":
    if (!param1) {
      console.log("Usage | Uso: add <descripción>");
    } else {
      addTask(param1);
    }
    break;
  case "list":
    listTasks();
    break;
  case "todo":
    listTasksByCompletedStatus("not done");
    break;
  case "in-progress":
    listTasksByCompletedStatus("in progress");
    break;
  case "done":
    listTasksByCompletedStatus("done");
    break;
  case "update":
    updateTask(param1, param2, param3);
    break;
  case "mark-in-progress":
    changeStatus(param1, "in progress");
    break;
  case "mark-done":
    changeStatus(param1, "done");
    break;
  case "remove":
    if (!param1) {
      console.log("Usage | Uso: remove <id>");
    } else {
      removeTask(param1);
    }
    break;
  default:
    console.log(
      "The command entered is not valid. | El comando ingresado no es válido."
    );
    console.log(
      "Available commands | Comandos disponibles: add, list, not-done, in-progress, done, update, mark-in-progress, mark-done, remove."
    );
}
