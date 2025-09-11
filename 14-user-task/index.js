import { Task } from "./task.js";
import { User } from "./user.js";

const myTask = new Task('Hello module world!')
const myUser = new User(myTask);

myUser.do();