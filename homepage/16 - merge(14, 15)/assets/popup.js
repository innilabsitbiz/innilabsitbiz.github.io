document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("contactModal");
    // const openModalBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("contact-form");
    const resultDiv = document.getElementById("result");

    // 모달 닫기
    function closeModal() {
        modal.classList.add("fade-out");
        setTimeout(() => {
            //
            modal.style.display = "none";
            modal.classList.remove("fade-out");
            //
            form.reset();
            resultDiv.className = "";
            resultDiv.textContent = "";
        }, 290);
    }

    // 이벤트 리스너 설정
    // openModalBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    // 모달 외부 클릭 시 닫기
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 폼 제출 처리
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;

        // Google Apps Script Web App URL
        // const scriptURL = "YOUR_GOOGLE_SCRIPT_URL";
        const scriptURL =
            "https://script.google.com/macros/s/AKfycbxodr2no9_pjYJPODou26FQhmZz6MkpH494sOVd0KEfGBgZjaG7qPMlyvFpIUo_81yV/exec";

        fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                comment: comment,
                timestamp: new Date().toISOString(),
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                resultDiv.className = "success";
                resultDiv.textContent = "Successfully registered!";

                // 3초 후 모달 닫기
                setTimeout(closeModal, 3000);
            })
            .catch((error) => {
                resultDiv.className = "error";
                resultDiv.textContent = "Error";
            });
    });
});

// 모달 열기
function openModalContact() {
    const modal = document.getElementById("contactModal");
    modal.style.display = "flex";
    modal.classList.add("fade-in");
    return false;
}
