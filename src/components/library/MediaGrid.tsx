const media = [
  {
    id: 1,
    name: "banner-instagram.png",
    type: "🖼️ Imagem",
    size: "2.1 MB",
  },
  {
    id: 2,
    name: "reels-clinica.jpg",
    type: "📸 Imagem",
    size: "850 KB",
  },
  {
    id: 3,
    name: "video-promocional.mp4",
    type: "🎥 Vídeo",
    size: "18 MB",
  },
  {
    id: 4,
    name: "logo-socialflow.svg",
    type: "🎨 Logo",
    size: "120 KB",
  },
];

export default function MediaGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {media.map((item) => (
        <div
          key={item.id}
          className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500 transition"
        >
          <div className="text-5xl mb-4 text-center">
            {item.type.split(" ")[0]}
          </div>

          <h3 className="font-semibold break-all">
            {item.name}
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            {item.type}
          </p>

          <p className="text-slate-500 text-sm">
            {item.size}
          </p>
        </div>
      ))}
    </div>
  );
}