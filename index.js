const modal = $.modal({
  title: "Do you really want to buy this tickets?",
  bodyText: "Sunday at am10.30 Movie: 'Kill them all.' Two tickets. Sit12, Row 10. Sit 13, row 10.",
});

// UI elements
const closeBtn = document.querySelector(".modal-close");
const modalFooter = document.querySelector('.modal-footer');

// Program
closeBtn.addEventListener("click", e => {
	const answer = modal.close();
	console.log(answer);
});

// Btn events
modalFooter.addEventListener('click', e => {
	if (e.target.id === 'okBtn') {
		modal.result = true;
	};
	if (e.target.id === 'cancelBtn') {
		modal.result = false;
	};
	console.log(modal);
	modal.close();
	return modal.result;
});
