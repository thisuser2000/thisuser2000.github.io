const modal = document.getElementById("art-modal");

const image   = modal.querySelector(".slideshow-feature");
const left    = modal.querySelector(".slideshow-left");
const right   = modal.querySelector(".slideshow-right");
const counter = modal.querySelector(".slideshow-counter");
const counterText = modal.querySelector(".slideshow-ID");

const titleEl = modal.querySelector("#modal-title");
const dateEl  = modal.querySelector("#modal-date");
const descEl  = modal.querySelector("#modal-description");

let current = 1;
let total = 1;
let base = "";


function updateImage() {
	image.src = `${base}-${current}.webp`;
	counterText.textContent = `${current}/${total}`;

	left.style.visibility  = current === 1     ? "hidden" : "visible";
	right.style.visibility = current === total ? "hidden" : "visible";
}


left.addEventListener("click", () => {
	if (current > 1) {
		current--;
		updateImage();
	}
});

right.addEventListener("click", () => {
	if (current < total) {
		current++;
		updateImage();
	}
});


modal.addEventListener("show.bs.modal", event => {
	const card = event.relatedTarget;
	const key  = card.dataset.project;
	const project = PROJECTS[key];

	if (!project) {
		console.warn(`No project data for key: ${key}`);
		return;
	}

	titleEl.textContent = project.title;
	dateEl.textContent  = project.date;
	descEl.innerHTML = project.description;

	descEl.querySelectorAll(".modal-button").forEach(btn => btn.remove());

	project.downloads.forEach(d => {
		descEl.insertAdjacentHTML("beforeend", `
			<a class="modal-button" target="_blank" href="${d.href}">
				<img src="assets/icons/${d.icon}.svg"/>
				<p>${d.text}</p>
			</a>
		`);
	});

	base  = project.images.base;
	total = project.images.total;
	current = 1;

	image.dataset.base  = base;
	image.dataset.total = total;

	const visibility = total === 1 ? "hidden" : "visible";
	left.style.visibility  = visibility;
	right.style.visibility = visibility;
	counter.style.visibility = visibility;

	updateImage();

	for (let i = 1; i <= total; i++) {
		const img = new Image();
		img.src = `${base}-${i}.webp`;
	}
});


modal.addEventListener("hidden.bs.modal", () => {
	current = 1;
});
