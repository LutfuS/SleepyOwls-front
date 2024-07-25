// src/components/TutorialList.tsx
import React from 'react';

interface Tutorial {
  title: string;
  description: string;
}

interface TutorialListProps {
  tutorials: Tutorial[];
}

export const TutorialList: React.FC<TutorialListProps> = ({ tutorials }) => {
  return (
    <div>
      <h2>Liste de tutoriels sur le sommeil</h2>
      <ul>
        {tutorials.map((tutorial, index) => (
          <li key={index}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

