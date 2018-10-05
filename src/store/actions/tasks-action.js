/**
 * Кладет массив задач в редакс
 * @param {Array<Object>} taskList
 */

export const tasksAction = taskList => {
  return {
    type: "TASKS-GIVEAWAY",
    payload: taskList
  };
};
