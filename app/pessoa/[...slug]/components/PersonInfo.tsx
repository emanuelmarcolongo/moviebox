import { IPerson } from "@/app/@types/person";
import Image from "next/image";
import Link from "next/link";

type PersonInfoProps = {
  personInfo: IPerson;
};
const PersonInfo = ({ personInfo }: PersonInfoProps) => {
  const shortBiography = personInfo.biography.split("\n")[0];
  const birthdateBr = new Date(personInfo?.birthday).toLocaleDateString(
    "pt-BR"
  );

  const { name, place_of_birth, birthday, biography, gender, profile_path } =
    personInfo;

  const genderTable: { [key: number]: string } = {
    0: "Não especificado",
    1: "Feminino",
    2: "Masculino",
    3: "Não binário",
  };
  return (
    <main className="mt-24 text-white  flex flex-col items-center px-8 space-y-6 md:px-0 md:space-y-0 md:flex-row md:items-start md:space-x-10 relative w-full">
      <div className="relative md:w-[200px] lg:h-[300px] w-[300px] h-[400px] object-cover overflow-hidden md:min-w-[200px] rounded-md drop-shadow-2xl">
        <Image
          alt={`${name} photo`}
          src={process.env.IMG_URL + profile_path}
          fill
        />
      </div>

      <div className="ml-12 space-y-12">
        <h1 className="font-bold text-3xl text-center">{name}</h1>
        {!!biography ? (
          <div className="mt-12 w-full">
            <h1 className="font-bold text-xl">Biografia:</h1>
            <p className="text font-light flex-wrap lg:max-w-full pr-10">
              {shortBiography}
            </p>
          </div>
        ) : (
          <p className="">
            Parece que a biografia não se enconstra disponível em português.
          </p>
        )}
      </div>
    </main>
  );
};

export default PersonInfo;
