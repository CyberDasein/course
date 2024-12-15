import { Link } from 'react-router-dom';
import { Character } from '../types';
import { internalPaths } from '../paths';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link to={`${internalPaths.detail}/characters/${character.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src={character.image} alt={character.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{character.name}</h3>
          <p className="text-gray-600">Status: {character.status}</p>
          <p className="text-gray-600">Species: {character.species}</p>
          <p className="text-gray-600">Created: {character.created}</p>
        </div>
      </div>
    </Link>
  );
}

