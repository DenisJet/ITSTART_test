import { ISeminar } from "../SeminarsList/SeminarsList";

interface DeleteSeminarModalProps {
  seminar: ISeminar;
  onDelete: (id: number) => void;
}

export default function DeleteSeminarModal({
  seminar,
  onDelete,
}: DeleteSeminarModalProps) {
  const handleDelete = () => {
    if (seminar.id) {
      onDelete(seminar.id);
    }
  };

  return (
    <dialog id="delete_seminar_modal" className="modal">
      <div className="modal-box text-center">
        <p className="py-4">Вы действительно хотите удалить семинар:</p>
        <p className="text-xl">{seminar?.title}</p>
        <div className="modal-action">
          <button onClick={handleDelete} className="btn btn-error">
            Удалить
          </button>
          <form method="dialog">
            <button className="btn btn-success">Отмена</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
