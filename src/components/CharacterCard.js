import Image from 'next/image';
import Link from 'next/link';

const CharacterCard = ({character}) => {
  return (
    <article className="col-span-3 bg-emerald-600 rounded-3xl p-3 flex-col justify-between h-[500px]">
        <h2 className="text-2xl mb-2 text-[#0a0a0a] font-bold min-h-[4rem] flex justify-center">{character.name}</h2>
        <div className= "mb-4">
            <Image 
            className= "rounded-t-3xl"
            src={character.image}
            width={300}
            height={300}
            alt={character.name}
            />
        </div>
        <p className="text-[#0a0a0a] text-sm">{character.status}</p>
        <p className="mb-5 mt-2 text-[#0a0a0a] text-xs">{character.origin.name}</p>
        <Link className="bg-[#dae74b] flex justify-center rounded-3xl p-4 text-[#0a0a0a] font-bold mt-auto hover:bg-orange-600 hover:text-amber-50" href={`character/${character.id}`}> View more </Link>
    </article> 
  )
} 

export default CharacterCard