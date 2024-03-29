import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FormationDetail = () => {
  const [formation, setFormation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch(`http://localhost:8081/formation/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Échec de la requête');
          }
          return res.json();
        })
        .then((data) => {
          setFormation(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setIsLoading(false);
        });
    }
  }, [id]);
  
  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite lors du chargement des données.</div>;
  }

  return (
    <div>
      <h1>{formation.nom}</h1>
      <p>Date: {formation.sport}</p>
      
      <p>Description: {formation.description}</p>
    </div>
  );
};

export default FormationDetail;
