function calculateCalories() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    document.getElementById("result").textContent = "Kérlek, töltsd ki az összes mezőt helyesen!";
    return;
  }

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const maintenanceCalories = bmr * activity;

  // Makrotápanyagok számítása (20% fehérje, 30% zsír, 50% szénhidrát)
  const protein = (maintenanceCalories * 0.2) / 4; // 1g fehérje = 4 kcal
  const fat = (maintenanceCalories * 0.3) / 9; // 1g zsír = 9 kcal
  const carbs = (maintenanceCalories * 0.5) / 4; // 1g szénhidrát = 4 kcal

  document.getElementById("result").innerHTML = `
        <p><strong>Napi kalóriaszükséglet:</strong> ${Math.round(maintenanceCalories)} kcal</p>
        <p><strong>Fehérje:</strong> ${Math.round(protein)} g</p>
        <p><strong>Zsír:</strong> ${Math.round(fat)} g</p>
        <p><strong>Szénhidrát:</strong> ${Math.round(carbs)} g</p>
    `;
}
