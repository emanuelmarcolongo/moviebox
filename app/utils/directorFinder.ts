import { Crew } from "../@types/cast";

export const movieDirector = (crew: Crew[]) => {
  for (let person of crew) {
    if (person.job === "Director" && person.department === "Directing") {
      return person;
    }
  }
  return null;
};
