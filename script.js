// CHAT WINDOW TOGGLE
const chatBtn = document.getElementById("chatBtn");
const chatWindow = document.querySelector(".chat-window");

chatBtn.addEventListener("click", () => {
    chatWindow.style.display =
        chatWindow.style.display === "block" ? "none" : "block";
});

// CHAT FUNCTION
document.getElementById("sendBtn").addEventListener("click", () => {

    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if(message === "") return;

    const messages = document.querySelector(".messages");

    // user message
    messages.innerHTML += `
        <div class="user-message">${message}</div>
    `;

    // simple AI reply (demo logic)
    let reply = "";

    if(message.toLowerCase().includes("aadhaar")){
        reply = "Please upload your Aadhaar card for verification.";
    }
    else if(message.toLowerCase().includes("help")){
        reply = "Upload document and wait for AI analysis.";
    }
    else{
        reply = "I am processing your request. Please upload document.";
    }

    messages.innerHTML += `
        <div class="bot-message">${reply}</div>
    `;

    input.value = "";
});

// LANGUAGE CHANGE (SIMPLE DEMO)
document.getElementById("language").addEventListener("change", (e) => {

    const lang = e.target.value;

    if(lang === "hi"){
        document.getElementById("title").innerText =
            "एआई दस्तावेज़ सत्यापन पोर्टल";

        document.getElementById("desc").innerText =
            "एआई सिस्टम द्वारा दस्तावेज़ सत्यापन करें।";
    }
    else{
        document.getElementById("title").innerText =
            "AI Document Verification Portal";

        document.getElementById("desc").innerText =
            "Detect forged documents using AI-powered verification system.";
    }
});
