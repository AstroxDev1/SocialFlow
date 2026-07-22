type Media = {
  id: number;
  name: string;
  filename: string;
  type: string;
  mimeType: string;
  size: number;
  url: string;
};

type MediaGridProps = {
  media: Media[];
  onDelete: (id: number) => void;
  onEdit: (media: Media) => void;
};

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function MediaGrid({
  media,
  onDelete,
  onEdit,
}: MediaGridProps) {
  if (media.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-700
          bg-slate-900
          py-20
          text-center
        "
      >
        <div className="text-6xl mb-4">
          📁
        </div>

        <h2 className="text-xl font-semibold text-white">
          Nenhuma mídia encontrada
        </h2>

        <p className="mt-2 text-slate-400">
          Faça o primeiro upload para começar sua biblioteca.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
    >
      {media.map((item) => (
        <div
          key={item.id}
          className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            transition
            hover:-translate-y-1
            hover:border-blue-500
            hover:shadow-xl
          "
        >
          <div
            className="
              h-48
              bg-slate-800
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >
            {item.mimeType.startsWith("image") ? (
              <img
                src={`http://localhost:3333${item.url}`}
                alt={item.name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  group-hover:scale-105
                "
              />
            ) : (
              <div className="text-7xl">
                🎥
              </div>
            )}
          </div>

          <div className="p-5">
            <h3
              className="
                truncate
                font-semibold
                text-white
              "
            >
              {item.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.type}
            </p>

            <p className="text-sm text-slate-500">
              {formatFileSize(item.size)}
            </p>

            <div className="mt-5 flex gap-2">
              <a
                href={`http://localhost:3333${item.url}`}
                target="_blank"
                rel="noreferrer"
                className="
                  flex-1
                  rounded-lg
                  bg-slate-800
                  py-2
                  text-center
                  text-sm
                  text-slate-300
                  transition
                  hover:bg-slate-700
                "
              >
                Abrir
              </a>

              <button
                  onClick={() => onEdit(item)}
                  className="
                  rounded-lg
                  bg-yellow-500
                  px-4
                  text-white
                  transition
                  hover:bg-yellow-600
                "

              >
                ✏️
              </button>

              <button
                  onClick={() => onDelete(item.id)}
                  className="
                  rounded-lg
                  bg-red-600
                  px-4
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}