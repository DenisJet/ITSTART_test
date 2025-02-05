import { ISeminar } from "../SeminarsList/SeminarsList";

export default function SeminarCard({
  seminar,
  onDeleteModalOpen,
  onEditModalOpen,
}: {
  seminar: ISeminar;
  onDeleteModalOpen: (seminar: ISeminar) => void;
  onEditModalOpen: (seminar: ISeminar) => void;
}) {
  return (
    <div className="card bg-info-content max-w-96 shadow-sm h-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <div className="card-body">
        <h2 className="card-title">{seminar.title}</h2>
        <p>{seminar.description}</p>
        <div className="flex justify-end gap-2">
          <span>Дата: {seminar.date}</span>
          <span>Время: {seminar.time}</span>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-info"
            onClick={() => onEditModalOpen(seminar)}
          >
            Редактировать
          </button>
          <button
            className="btn btn-error"
            onClick={() => onDeleteModalOpen(seminar)}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
