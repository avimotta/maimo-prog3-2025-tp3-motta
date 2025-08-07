import Image from 'next/image';

const CharacterCardSingle = ({character}) => {

    return (
            <div className="max-w-[1000px] mx-auto my-6">
              <div>
                <a className="bg-orange-600 mb-5 rounded-3xl p-4 text-[#0a0a0a] font-bold hover:bg-orange-600 hover:text-amber-50" href="http://localhost:3000/">Volver</a>
              </div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-400 text-[64px] font-bold leading-[37px] text-center px-4">
                    {character.name}
                </h1> 
                {character.image && (
                    <Image
                        className="w-full mt-6 max-h-[500px] object-cover rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] opacity-60"
                        src={character.image}
                        width={300}
                        height={300}
                        alt={character.name}
                    /> 
                )}
                <div className="bg-[#dae74b] rounded-xl shadow p-6 space-y-2 text-lg text-black leading-[23px]">
                    <p className="flex justify-center"><strong>Status:&nbsp;</strong>  {character.status}</p>
                    <p className="flex justify-center"><strong>Species:&nbsp; </strong> {character.species}</p>
                    <p className="flex justify-center"><strong>Gender:&nbsp; </strong> {character.gender}</p>
                    <p className="flex justify-center"><strong>Origin:&nbsp; </strong> {character.origin?.name}</p>
                    <p className="flex justify-center"><strong>Location:&nbsp; </strong> {character.location?.name}</p>
                </div>
        </div>
    )
}

export default CharacterCardSingle

