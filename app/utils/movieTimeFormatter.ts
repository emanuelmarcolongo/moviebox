export const movieTimeFormatter = (runtime: number): String => {
  const formatedTime = `${Math.floor(runtime / 60)}h ${Math.floor(
    runtime % 60
  )}min`;

  return formatedTime;
};
