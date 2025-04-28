const area = document.querySelector(
    "body > div > div:nth-child(2) > div.col-md-5 > div"
);

const lhContainer = document.createElement("div");
lhContainer.classList.add("mt-4");
area.appendChild(lhContainer);

const lhMenu = document.createElement("div");
lhMenu.classList.add("p-3", "border", "border-secondary", "rounded");
lhContainer.appendChild(lhMenu);

const lhTitle = document.createElement("div");
lhTitle.innerHTML = `<div class="fw-bold" style="color: white">Lookin' Hackable</div><div class="text-muted">Version 1.0.0</div>`;
lhMenu.appendChild(lhTitle);

const inputs = [
    {
        type: "input",
        placeholder: "Custom Username",
        value: userName,
        func: (input) => {
            userName = usernameInput.value;
        },
    },
    {
        type: "button",
        text: "Force Skip",
        func: () => {
            showMessage("Force Skipping Song!");
            for (let i = 1; i <= 5; i++) {
                fetch(`/vote-to-skip?user=${i}`, {
                    method: "POST",
                });
            }
        },
    },
];

inputs.forEach((object) => {
    if (object.type === "button") {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary", "btn-sm", "w-100", "mt-1");
        button.innerHTML = object.text;
        button.addEventListener("click", object.func);
        lhMenu.appendChild(button);
    } else if (object.type === "input") {
        const input = document.createElement("input");
        input.classList.add(
            "form-control",
            "form-control-sm",
            "bg-dark",
            "text-white",
            "mt-1",
            "rizz"
        );
        input.placeholder = object.placeholder;
        input.value = object.value;
        input.addEventListener("input", (e) => {
            object.func(e.target.value);
        });
        lhMenu.appendChild(input);
    } else {
    }
});

const newStyle = document.createElement("style");
newStyle.innerHTML = `
    .rizz::placeholder {
        color: gray;
    }
`;
document.head.appendChild(newStyle);
