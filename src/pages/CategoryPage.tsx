import React from 'react';
import { useParams, Link, NavLink, useSearchParams } from 'react-router-dom';
import { CharacterCard } from '../components/CharacterCard';
import charactersData from '../data/characters.json';
import locationsData from '../data/location.json';
import episodesData from '../data/episode.json';
import { Character, Location, Episode, CategoryType } from '../types';
import { NotFoundPage } from './NotFoundPage';
import { internalPaths } from '../paths';

export function CategoryPage() {
  const { category } = useParams<{ category: CategoryType }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get('sort');

  const handleSortChange = (sort: string) => {
    setSearchParams({ sort });
  };

  let data: (Character | Location | Episode)[] = [];
  let title = '';

  switch (category) {
    case 'characters':
      data = charactersData;
      title = 'Characters';
      break;
    case 'locations':
      data = locationsData;
      title = 'Locations';
      break;
    case 'episodes':
      data = episodesData;
      title = 'Episodes';
      break;
    default:
      return <NotFoundPage/>;
  }

  if (category === 'characters' && sortParam) {
    if (sortParam === 'createdASC') {
      data = [...data].sort((a, b) => {
        return new Date((a as Character).created).getTime() - new Date((b as Character).created).getTime();
      });
    } else if (sortParam === 'createdDESC') {
      data = [...data].sort((a, b) => {
        return new Date((b as Character).created).getTime() - new Date((a as Character).created).getTime();
      });
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {category === 'characters' && (
        <div className="mb-4">
          <button
            onClick={() => handleSortChange('createdASC')}
            className={`mr-2 px-4 py-2 rounded ${
              sortParam === 'createdASC' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Sort by Created (ASC)
          </button>
          <button
            onClick={() => handleSortChange('createdDESC')}
            className={`px-4 py-2 rounded ${
              sortParam === 'createdDESC' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Sort by Created (DESC)
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => {
          if (category === 'characters') {
            return <CharacterCard key={item.id} character={item as Character} />;
          } else {
            return (
              <Link key={item.id} to={`${internalPaths.detail}/${category}/${item.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  {category === 'locations' && (
                    <p className="text-gray-600">Type: {(item as Location).type}</p>
                  )}
                  {category === 'episodes' && (
                    <p className="text-gray-600">Episode: {(item as Episode).episode}</p>
                  )}
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

