function generateFeedback(){
    const name = document.getElementById("studentName").value;
    const subject = document.getElementById("subject").value;
    const performance = document.getElementById("performance").value;
    const behavior = document.getElementById("behavior").value;

    let feedback = 'Student ' + name + ' has shown ' + performance + ' performance in ' + subject + '. ';

    if(behavior === 'great'){
        feedback += 'They actively participate in class discussions' 
    }else if(behavior === 'respectful'){
        feedback += 'They maintain a respectful and cooperative attitude in the classroom.';
    }else if(behavior === 'distracted'){
        feedback += 'They sometimes get distracted, and more focus is encouraged.';
    } else {
        feedback += 'They can be disruptive at times and need consistent guidance.';
    }

    localStorage.setItem("feedbackText", feedback);
    window.location.href = "feedback-result.html";
}

//the if block checks if you are on the result page
if(window.location.pathname.includes("feedback-result.html")){
    //if yes on the result page
    // then it retrieves the feedback stored in the localstorage
    const feedback = localStorage.getItem("feedbackText");

    //then we look for the id feedabcktext in the HTML
    //and set its text content to the feedback retrieved
    document.getElementById("feedbackText").textContent = feedback;
}

function goBack(){
    window.location.href = "feedback-form.html";
}

// When your generateFeedback() function runs:
// It collects data and generates a feedback message.
// Instead of displaying it right away, it redirects the user to another page (feedback-result.html).
// Since JavaScript variables do not persist across pages, you need a way to pass data between pages.
// This is where localStorage comes in.

// Benefits of using localStorage here:
// Persistence: Data stays even after page reload or tab close (unless manually cleared).
// Cross-page communication: You can access the stored data from any page on the same domain.
// Simple API: localStorage.setItem(key, value) and localStorage.getItem(key) are easy to use.

// 🔄 Alternative options (for context):
// URL parameters: You could pass data via query strings like feedback-result.html?msg=..., but it's messy and has length limits.
// Session storage: Similar to localStorage, but clears automatically when the tab or browser closes.
// Backend storage: You could save data in a database, but that's overkill for simple frontend-only use cases.