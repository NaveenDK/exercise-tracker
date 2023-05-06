import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { exercises: response } = await axios.get('http://localhost:5000/exercises/');
        setExercises(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
 exercises,
    loading,
  };
};

export default useFetchData;