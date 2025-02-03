import { useEffect, useState } from "react";
import axios from "axios";

interface ISeminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export default function SeminarList() {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSeminars = async () => {
      try {
        const response = await axios.get("http://localhost:3001/seminars");
        setSeminars(response.data);
      } catch (error) {
        console.error("Error loading seminars:", error);
      } finally {
        setLoading(false);
      }
    };

    getSeminars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Ours Seminars</h2>
      <ul>
        {seminars.map((seminar: ISeminar) => (
          <li key={seminar.id}>
            <h3>{seminar.title}</h3>
            <img src={seminar.photo} alt="photo" />
            <p>{seminar.description}</p>
            <div>
              <span>Date: {seminar.date}</span>{" "}
              <span>Time: {seminar.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
