document.addEventListener("DOMContentLoaded", () => {
  const festivals = [
    { name: "Makar Sankranti", month: "january" },
    { name: "Shiv Jayanti", month: "february" },
    { name: "Holi", month: "march" },
    { name: "Gudhi Padwa", month: "april" },
    { name: "Akshaya Tritiya", month: "may" },
    { name: "Vat Purnima", month: "june" },
    { name: "Ashadi Ekadashi", month: "july" },
    { name: "Raksha Bandhan", month: "august" },
    { name: "Ganesh Chaturthi", month: "september" },
    { name: "Navratri", month: "october" },
    { name: "Diwali", month: "november" },
    { name: "Datta Jayanti", month: "december" }
  ];

  const monthSelect = document.getElementById("month");
  const resultsDiv = document.getElementById("results");
  const searchBtn = document.getElementById("searchBtn");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const selectedMonth = monthSelect.value.toLowerCase();

      const filtered = festivals.filter(festival => {
        return (!selectedMonth || festival.month === selectedMonth);
      });

      resultsDiv.innerHTML = filtered.length
        ? filtered.map(f => `<p><strong>${f.name}</strong> (${f.month}, Maharashtra)</p>`).join("")
        : "<p>No festivals found for this month.</p>";
    });
  } else {
    console.error("Search button not found");
  }
});
