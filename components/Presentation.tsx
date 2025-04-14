export function Presentation({ slides }) {
  return (
    <div className="mt-6 space-y-4">
      {slides.map((slide, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{slide.title}</h2>
          <ul className="list-disc pl-6">
            {slide.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}