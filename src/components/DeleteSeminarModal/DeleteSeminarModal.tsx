import { ISeminar } from "../SeminarsList/SeminarsList";

export default function DeleteSeminarModal({
  seminar,
  onDelete,
}: {
  seminar: ISeminar;
  onDelete: (id: number) => void;
}) {
  return (
    <dialog id="delete_seminar_modal" className="modal">
      <div className="modal-box text-center">
        <p className="py-4">Вы действительно хотите удалить семинар:</p>
        <p className="text-xl">{seminar?.title}</p>
        <div className="modal-action">
          <button
            onClick={() => onDelete(seminar?.id)}
            className="btn btn-error"
          >
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
