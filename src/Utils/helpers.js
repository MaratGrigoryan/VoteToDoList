export const removeElement = (data, i) => [...data.slice(0,i), ...data.slice(i + 1)];
