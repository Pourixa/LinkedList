import { LinkedList } from "./script.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

list.removeAt(2);
console.log(list.toString());