function Landing({ onSelectGenre }) {
  const genres = [
    { name: "Fantasy", color: "purple" },
    { name: "Horror", color: "red" },
    { name: "Sci-fi", color: "cyan" },
    { name: "Mystery", color: "yellow" },
  ];

  const colorStyles = {
  purple: `
    border-white/10
    bg-purple-500/10 
    hover:bg-purple-500/20 
    hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
  `,
  red: `
    border-red-400/10
    bg-red-500/10 
    hover:bg-red-500/20 
    hover:shadow-[0_0_25px_rgba(239,68,68,0.8)]
  `,
  cyan: `
    border-cyan-400/10
    bg-cyan-400/10 
    hover:bg-cyan-400/20 
    hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]
  `,
  yellow: `
    border-yellow-400/10
    bg-yellow-400/10 
    hover:bg-yellow-400/20 
    hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
  `,
};

  return (
  <div className="h-screen flex flex-col bg-black text-center px-4 relative overflow-hidden">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>

    {/* Title */}
    <div className="pt-6 relative z-10">
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 13,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 20,
          color: "#fff",
        }}
      >
        Dark Narratives
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-grow flex flex-col items-center justify-center relative z-10">

      {/* Main Heading */}
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 45,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 20,
          color: "#fff",
        }}
      >
        Choose Your Reality
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 15,
          letterSpacing: 1,
          marginBottom: 40,
          color: "#fff",
          fontStyle: "italic",
        }}
      >
        Every choice shapes the darkness ahead
      </div>

      {/* Genre Grid */}
      <div className="grid grid-cols-2 gap-8">

        {genres.map((g) => (

          <button
            key={g.name}

            onClick={() => onSelectGenre(g.name)}

            className={`
              w-60 h-36
              text-lg font-semibold text-white
              bg-black

              border-2 rounded-2xl
              ${colorStyles[g.color]}

              transform transition-all duration-300 ease-in-out

              hover:scale-110
              hover:-translate-y-2

              active:scale-95
            `}

            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {g.name}
          </button>

        ))}

      </div>

      {/* Saved Stories Button */}
      <button
        onClick={() => onSelectGenre("Saved")}

        className="
          mt-10
          px-8
          py-4
          border
          border-green-400/20
          rounded-2xl
          text-white
          bg-green-500/10
          hover:bg-green-500/20
          hover:shadow-[0_0_25px_rgba(74,222,128,0.7)]
          transition-all
          duration-300
        "

        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Saved Stories
      </button>

    </div>
  </div>
);
}

export default Landing;