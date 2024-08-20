export const getItemByLS = <T>(key: string): T | undefined => {
  if (typeof window !== undefined) {
    const item = JSON.parse(localStorage.getItem(key) as string);
    return item;
  }
};
