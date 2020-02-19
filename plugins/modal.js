$.modal = function(options) {
	const $modal = _createModal(options);
	let _isClosing = false;
	const ANIMATION_SPEED = 200;

  return {
    open() {
      !_isClosing && $modal.classList.add("open");
    },
		close() {
			_isClosing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
				$modal.classList.remove("hide");
				_isClosing = false;
			}, ANIMATION_SPEED);
    },
    destroy() {},
  };
};

function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
		<div class="modal-shadow">
			<div class="modal-window">
				<div class="modal-header">
					<span class="modal-title">Modal Title</span>
					<span class="modal-close">&times;</span>
				</div>
				<div class="modal-body">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary">Ok</button>
					<button class="btn btn-danger">Cancel</button>
				</div>
			</div>
		</div>
	`
  );
  document.body.appendChild(modal);
  return modal;
}
