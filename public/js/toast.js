        let toastTimer = null;

        function showToast(type, message, duration = 3000) {
            const id = type === "success" ? "#toast-success" : "#toast-danger";
            document.querySelector(`${id} .toast-message`).innerHTML = message;
            document.querySelector(id).classList.remove("hidden");


            if (toastTimer) {
                clearTimeout(toastTimer);
                toastTimer = null;
            }

            if (duration > 0) {
                toastTimer = setTimeout(() => {
                    hideToast();
                }, duration);
            }
        }

        function hideToast(type = "success") {
            if (toastTimer) {
                clearTimeout(toastTimer);
                toastTimer = null;
            }
            const id = type === "success" ? "#toast-success" : "#toast-warning";
            document.querySelector(id).classList.add("hidden");
        }

        document
            .querySelector("#toast-success button")
            .addEventListener("click", () => hideToast("success"));
        document
            .querySelector("#toast-warning button")
            .addEventListener("click", () => hideToast("warning"));