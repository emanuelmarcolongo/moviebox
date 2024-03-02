export const releaseDatePtBr = (date: string) => {
  const formatedReleaseDate = new Date(date)
    .toLocaleDateString("pt-BR")
    .replaceAll("/", "-");

  return formatedReleaseDate;
};
