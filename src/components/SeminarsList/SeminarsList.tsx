import { useEffect, useState } from "react";
import axios from "axios";
import SeminarCard from "../SeminarCard/SeminarCard";
import DeleteSeminarModal from "../DeleteSeminarModal/DeleteSeminarModal";

export interface ISeminar {
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
  const [activeSeminar, setActiveSeminar] = useState<ISeminar | null>(null);

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

  const deleteSeminarModalOpenClick = (seminar: ISeminar) => {
    const deleteSeminarModal = document.getElementById(
      "delete_seminar_modal",
    ) as HTMLDialogElement | null;
    setActiveSeminar(seminar);
    deleteSeminarModal?.showModal();
  };

  const deleteSeminar = async (id: number) => {
    const deleteSeminarModal = document.getElementById(
      "delete_seminar_modal",
    ) as HTMLDialogElement | null;
    setActiveSeminar(null);
    deleteSeminarModal?.close();

    try {
      await axios.delete(`http://localhost:3001/seminars/${id}`);
      setSeminars(seminars.filter((seminar: ISeminar) => seminar.id !== id));
    } catch (error) {
      console.error("Error deleting seminar:", error);
      alert("Не получилось удалить семинар! Попробуйте ещё раз.");
    }
  };

  if (loading) {
    return (
      <div>
        <ul className="flex flex-wrap gap-5 justify-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item}>
              <div className="flex w-96 flex-col gap-4">
                <div className="skeleton h-64 w-full"></div>
                <div className="skeleton h-12 w-full"></div>
                <div className="skeleton h-12 w-full"></div>
                <div className="skeleton h-12 w-full"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <ul className="flex flex-wrap gap-5 justify-center">
        {seminars.map((seminar: ISeminar) => (
          <li key={seminar.id}>
            <SeminarCard
              seminar={seminar}
              onDeleteModalOpen={deleteSeminarModalOpenClick}
            />
          </li>
        ))}
      </ul>
      <DeleteSeminarModal
        seminar={activeSeminar as ISeminar}
        onDelete={deleteSeminar}
      />
    </>
  );
}
