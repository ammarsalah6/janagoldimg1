function changeProduct(name, desc, img, tableData) {
    document.getElementById("productName").innerText = name;
    document.getElementById("productDesc").innerText = desc;
    document.getElementById("mainImg").src = img;

    document.querySelector(".details table").style.display = "table";

    let table = `
        <tr>
            <th>الكود</th>
            <th>الصنف</th>
            <th>العبوة</th>
            <th>الوحدة</th>
            <th>السعر</th>
        </tr>`;
    for (let i = 0; i < tableData.length; i++) {
        table += `<tr>
            <td>${tableData[i][0]}</td>
            <td>${tableData[i][1]}</td>
            <td>${tableData[i][2]}</td>
            <td>${tableData[i][3]}</td>
            <td>${tableData[i][4]}</td>
        </tr>`;
    }
    document.getElementById("productTable").innerHTML = table;
}

function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#productTable tr:not(:first-child)");
    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

function scrollToThumbs() {
    document.getElementById("thumbsSection").scrollIntoView({ behavior: 'smooth' });
}

const scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", scrollToThumbs);

window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.add("show");
    }
});
