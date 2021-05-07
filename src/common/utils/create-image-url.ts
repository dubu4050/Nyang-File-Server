export const createImageURL = (file): string => {
  const serverAddress: string = process.env.SERVER_ADDRESS;

  return `${serverAddress}/images/${file.filename}`;
};
