const password = localStorage.getItem('password');
const strengthText = document.getElementById('strength');
const suggestionsList = document.getElementById('suggestions');

function checkStrength(pwd) {
  const suggestions = [];

  const lengthScore = pwd.length >= 8;
  const upperScore = /[A-Z]/.test(pwd);
  const lowerScore = /[a-z]/.test(pwd);
  const numberScore = /[0-9]/.test(pwd);
  const specialScore = /[\W_]/.test(pwd);

  const totalScore = [lengthScore, upperScore, lowerScore, numberScore, specialScore].filter(Boolean).length;

  if (totalScore <= 2) {
    strengthText.textContent = "❌ Weak Password";
    strengthText.style.color = "red";
  } else if (totalScore === 3 || totalScore === 4) {
    strengthText.textContent = "⚠️ Medium Strength";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "✅ Very Strong!";
    strengthText.style.color = "green";
  }

  if (!lengthScore) suggestions.push("Make it at least 8 characters long");
  if (!upperScore) suggestions.push("Add uppercase letters");
  if (!lowerScore) suggestions.push("Include lowercase letters");
  if (!numberScore) suggestions.push("Add numbers");
  if (!specialScore) suggestions.push("Use symbols like !@#");

  return suggestions;
}

const suggestions = checkStrength(password);
suggestionsList.innerHTML = suggestions.map(s => `<li>👉 ${s}</li>`).join('');