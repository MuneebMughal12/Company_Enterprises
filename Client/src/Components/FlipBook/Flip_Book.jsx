  import React, { useEffect, useMemo, useRef, useState } from "react";
  import HTMLFlipBook from "react-pageflip";
  import clsx from "clsx";
  <link rel="stylesheet" href="./main.css" />

  /* ✅ Page wrapper required by react-pageflip */
  const Page = React.forwardRef(({ children }, ref) => {
    return (
      <div ref={ref} className="w-full h-full bg-white overflow-hidden">
        {children}
      </div>
    );
  });



  /* ✅ helper: pad numbers for filenames page001.webp */
  const pad = (num, size = 3) => String(num).padStart(size, "0");

  export default function Fliper_Book({
    pages = null, // ✅ if passed, use it
    total = 0,    // ✅ if pages not passed, use total with /public/pages/
    ext = "webp", // ✅ file extension for auto-loader
    pageWidth = 620,
    pageHeight = 700,
    className = "",
  }) {
    const bookRef = useRef(null);
    const [page, setPage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const flipSoundRef = useRef(null);



    const allPages = useMemo(() => {
      let arr = [];

      if (Array.isArray(pages) && pages.length > 0) {
        arr = [...pages];
      } else if (total > 0) {
        for (let i = 1; i <= total; i++) {
          arr.push(`/pages/page${pad(i)}.${ext}`);
        }
      }

      // ✅ Ensure even pages so spreads show properly
      if (arr.length % 2 !== 0) arr.push(null);

      return arr;
    }, [pages, total, ext]);

    const totalPages = allPages.length;

    const nextPage = () => bookRef.current?.pageFlip()?.flipNext();
    const prevPage = () => bookRef.current?.pageFlip()?.flipPrev();
    /* ✅ FLIP HANDLER WITH SOUND */
    const onFlip = (e) => {
      setPage(e.data);

      if (flipSoundRef.current) {
        flipSoundRef.current.currentTime = 0;
        flipSoundRef.current.play();
      }
    };

    /* ✅ Fullscreen */
    const toggleFullscreen = () => {
      const el = document.getElementById("flipbook-wrapper");
      if (!document.fullscreenElement) {
        el?.requestFullscreen?.();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen?.();
        setIsFullscreen(false);
      }
    };

    useEffect(() => {
      const exitHandler = () => {
        if (!document.fullscreenElement) setIsFullscreen(false);
      };
      document.addEventListener("fullscreenchange", exitHandler);
      return () => document.removeEventListener("fullscreenchange", exitHandler);
    }, []);

    const zoomIn = () => setZoom((z) => Math.min(1.4, +(z + 0.1).toFixed(1)));
    const zoomOut = () => setZoom((z) => Math.max(0.8, +(z - 0.1).toFixed(1)));

    return (
      <div
        id="flipbook-wrapper"
        className={clsx(
          "min-h-screen w-screen relative overflow-hidden flex items-center justify-center",
          className
        )}
      >
        {/* ✅ Background polygon */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-100">
          <div className="absolute -bottom-40 -left-40 w-[900px] h-[900px] bg-pink-400 rotate-12 rounded-[80px]" />
          <div className="absolute -bottom-56 left-40 w-[900px] h-[900px] bg-orange-300 rotate-6 rounded-[80px]" />
          <div className="absolute -bottom-56 right-10 w-[900px] h-[900px] bg-cyan-400 -rotate-6 rounded-[80px]" />
          <div className="absolute -top-40 -right-40 w-[900px] h-[900px] bg-purple-400 rotate-12 rounded-[80px]" />
        </div>

        {/* ✅ Book + UI Layer */}
        <div className="relative z-10 w-full max-w-[1400px] px-6 flex items-center justify-center">
          <div
            className="relative group"
            style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
          >
            {/* ✅ Top-right controls */}
            <div className="absolute top-4 right-4 z-30 flex gap-2">
              <button
                onClick={zoomOut}
                className="w-10 h-10 rounded-lg bg-white/90 shadow hover:bg-white flex items-center justify-center text-lg font-bold"
                title="Zoom out"
              >
                −
              </button>

              <button
                onClick={zoomIn}
                className="w-10 h-10 rounded-lg bg-white/90 shadow hover:bg-white flex items-center justify-center text-lg font-bold"
                title="Zoom in"
              >
                +
              </button>

              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 rounded-lg bg-white/90 shadow hover:bg-white flex items-center justify-center"
                title="Fullscreen"
              >
                ⛶
              </button>

              <button
                className="w-10 h-10 rounded-lg bg-white/90 shadow hover:bg-white flex items-center justify-center"
                title="Sound"
              >
                🔊
              </button>
            </div>

            {/* ✅ Hover arrows */}
            <button
              onClick={prevPage}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition"
            >
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white text-xl">
                ◀
              </div>
            </button>

            <button
              onClick={nextPage}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition"
            >
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center text-white text-xl">
                ▶
              </div>
            </button>

            {/* ✅ Book Frame */}
            <div
              className="relative bg-white rounded-[26px] shadow-2xl border border-white/70 p-3 overflow-hidden"
              style={{
                width: pageWidth * 2 + 80,
                height: pageHeight + 80,
              }}
            >

              {/* ✅ Paper curve shadow */}
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
              <div className="absolute right-2 top-8 h-[90%] w-[8px] rounded-full bg-black/10 blur-[1px]" />

              {/* Flipbook */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-white shadow-inner flipbook-container">
                <HTMLFlipBook
                  width={pageWidth * 2}
                  height={pageHeight}
                  size="fixed"
                  minWidth={pageWidth * 2}
                  maxWidth={pageWidth * 2}
                  minHeight={pageHeight}
                  maxHeight={pageHeight}
                  drawShadow={true}
                  maxShadowOpacity={0.4}
                  showCover={false}
                  mobileScrollSupport={true}
                  onFlip={onFlip}
                  usePortrait={true}
                  ref={bookRef}
                  className="rounded-[22px]"
                >

                  {allPages.map((src, idx) => (
                    <Page key={idx}>
                      <div className="relative w-full h-full">
                        {src ? (
                          <img
                            src={src}
                            alt={`Page ${idx + 1}`}
                            className="w-full h-full object-fill"  // ✅ full 2-page space
                            draggable={false}
                          />

                        ) : (
                          <div className="w-full h-full bg-white flex items-center justify-center text-gray-400">
                            Blank Page
                          </div>
                        )}


                        <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                          {idx + 1}
                        </div>
                      </div>
                    </Page>
                  ))}
                </HTMLFlipBook>
              </div>
            </div>



            {/* ✅ Bottom Progress Bar */}
            <div
              className="mt-6 flex items-center justify-center gap-3 cursor-pointer"
              onClick={(e) => {
                const bar = e.currentTarget.querySelector(".progress-outer");
                const rect = bar.getBoundingClientRect();
                const clickX = e.clientX - rect.left; // X position within the bar
                const newPage = Math.floor((clickX / rect.width) * totalPages);
                bookRef.current?.pageFlip()?.flip(newPage);
              }}
            >
              <div className="progress-outer w-[650px] h-2 bg-black/20 rounded-full overflow-hidden">
                <div
                  className="progress-inner h-full bg-black/60"
                  style={{
                    width: `${((page + 1) / totalPages) * 100}%`,
                  }}
                />
              </div>
            </div>



          </div>
        </div>
        {/* 🔊 Flip Sound */}
        <audio
          ref={flipSoundRef}
          src="/sounds/page-flip.mp3"
          preload="auto"
        />
      </div>
    );
  }