import { isToday } from "date-fns";
function Date() {
return isToday(new Date());
}

export { Date };