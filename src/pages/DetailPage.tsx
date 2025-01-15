import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import charactersData from '../data/characters.json';
import locationsData from '../data/location.json';
import episodesData from '../data/episode.json';
import { Character, Location, Episode, CategoryType } from '../types';
import { NotFoundPage } from './NotFoundPage';

export function DetailPage() {
  const { category, id } = useParams<{ category: CategoryType; id: string }>();

  let item: Character | Location | Episode | undefined;

  switch (category) {
    case 'characters':
      item = charactersData.find((char) => char.id === parseInt(id as string));
      break;
    case 'locations':
      item = locationsData.find((loc) => loc.id === parseInt(id as string));
      break;
    case 'episodes':
      item = episodesData.find((ep) => ep.id === parseInt(id as string));
      break;
    default:
      return <NotFoundPage/>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
      {category === 'characters' && (
        <div>
          <img src={(item as Character).image} alt={item.name} className="w-full max-w-md mb-4 rounded-lg" />
          <p><strong>Status:</strong> {(item as Character).status}</p>
          <p><strong>Species:</strong> {(item as Character).species}</p>
          <p><strong>Gender:</strong> {(item as Character).gender}</p>
        </div>
      )}
      {category === 'locations' && (
        <div>
          <p><strong>Type:</strong> {(item as Location).type}</p>
          <p><strong>Dimension:</strong> {(item as Location).dimension}</p>
        </div>
      )}
      {category === 'episodes' && (
        <div>
          <p><strong>Air Date:</strong> {(item as Episode).air_date}</p>
          <p><strong>Episode:</strong> {(item as Episode).episode}</p>
        </div>
      )}
      <p><strong>Created:</strong> {new Date(item.created).toLocaleDateString()}</p>
    </div>
  );
}

