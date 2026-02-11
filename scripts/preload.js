window.addEventListener("load", () => {
    const cache = [];

    Object.values(PROJECTS).forEach(project => {
        const { base, total } = project.images;

        for (let i = 1; i <= total; i++) {
            const img = new Image();
            img.src = `${base}-${i}.webp`;
            cache.push(img);
        }
    });

    window.__imagePreloadCache = cache; // prevent garbage collection
});
