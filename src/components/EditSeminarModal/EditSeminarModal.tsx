import { useEffect, useState } from "react";
import { ISeminar } from "../SeminarsList/SeminarsList";

export default function EditSeminarModal({
  seminar,
  onEditSave,
}: {
  seminar: ISeminar;
  onEditSave: (updatedSeminar: ISeminar) => void;
}) {
  const [title, setTitle] = useState(seminar?.title);
  const [description, setDescription] = useState(seminar?.description);
  const [date, setDate] = useState(seminar?.date);
  const [time, setTime] = useState(seminar?.time);

  useEffect(() => {
    if (seminar) {
      setTitle(seminar.title);
      setDescription(seminar.description);
      setDate(seminar.date);
      setTime(seminar.time);
    }
  }, [seminar]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleSave = () => {
    if (seminar) {
      const updatedSeminar: ISeminar = {
        ...seminar,
        title,
        description,
        date,
        time,
      };
      onEditSave(updatedSeminar);
    }
  };

  const convertDateFormat = (dateString: string) => {
    if (dateString) {
      const parts = dateString.split(".");
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
      }
    }

    return dateString;
  };

  return (
    <dialog id="edit_seminar_modal" className="modal">
      <div className="modal-box">
        <fieldset className="fieldset w-ful">
          <legend className="fieldset-legend text-xl">
            Редактирование семинара
          </legend>

          <label className="fieldset-label text-base">Заголовок</label>
          <input
            value={title}
            onChange={handleTitleChange}
            type="text"
            className="input"
            placeholder="Заголовок"
          />

          <label className="fieldset-label text-base">Описание</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="textarea"
            placeholder="Описание"
          />

          <label className="fieldset-label text-base">Дата</label>
          <input
            value={convertDateFormat(date)}
            onChange={handleDateChange}
            type="date"
            className="input"
          />

          <label className="fieldset-label text-base">Время</label>
          <input
            value={time}
            onChange={handleTimeChange}
            type="time"
            className="input"
          />
        </fieldset>
        <div className="modal-action">
          <button className="btn btn-success" onClick={handleSave}>
            Сохранить
          </button>
          <form method="dialog">
            <button className="btn btn-error">Отмена</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
