const aboutContainer = document.querySelector("#about_container");
const projectsContainer = document.querySelector("#projects_container");
const contactContainer = document.querySelector("#contact_container");
const contactForm = document.querySelector("#contact_container form");
const middle = document.querySelector("#middle");
function showabout() {
	aboutContainer.classList.add("show");
	aboutContainer.classList.add("slideInLeft");
	middle.classList.add("hide");
	setTimeout(() => {
		aboutContainer.classList.remove("slideInLeft");
	}, 800);
}
function closeabout() {
	aboutContainer.classList.add("slideOutLeft");
	setTimeout(() => {
		aboutContainer.classList.remove("show");
		aboutContainer.classList.remove("slideOutLeft");
	}, 600);
}
function showprojects() {
	projectsContainer.classList.add("show");
	projectsContainer.classList.add("slideInRight");
	setTimeout(() => {
		projectsContainer.classList.remove("slideInRight");
	}, 800);
}
function closeprojects() {
	projectsContainer.classList.add("slideOutRight");
	setTimeout(() => {
		projectsContainer.classList.remove("show");
		projectsContainer.classList.remove("slideOutRight");
	}, 600);
}
function showcontact() {
	contactContainer.classList.add("show");
	contactContainer.classList.add("slideInUp");
	setTimeout(() => {
		contactContainer.classList.remove("slideInUp");
	}, 800);
}
function closecontact() {
	contactContainer.classList.add("slideOutDown");
	setTimeout(() => {
		contactContainer.classList.remove("show");
		contactContainer.classList.remove("slideOutDown");
	}, 600);
}

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	emailjs.sendForm("service_oecx15k", "template_wry4f4u", e.target).then(
		function (response) {
			console.log("Email sent!", response.status, response.text);
			alert("Email sent successfully!");
		},
		function (error) {
			console.error("Error sending email:", error);
			alert("Oops! Something went wrong.");
		}
	);
});
