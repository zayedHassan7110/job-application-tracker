// Data (8 Jobs)
let data = [
    {
        id: "j1",
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description:
            "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "Not Applied",
    },
    {
        id: "j2",
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description:
            "Create stunning web experiences for high-profile clients. Requires a strong portfolio and modern web design skills.",
        status: "Not Applied",
    },
    {
        id: "j3",
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description:
            "Transform complex data into compelling visualizations. Required skills: D3.js, React, and analytical thinking.",
        status: "Not Applied",
    },
    {
        id: "j4",
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description:
            "Design and maintain scalable backend systems using Python and AWS with modern DevOps practices.",
        status: "Not Applied",
    },
    {
        id: "j5",
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description:
            "Create beautiful and functional user interfaces. Strong design sense and frontend development experience required.",
        status: "Not Applied",
    },
    {
        id: "j6",
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description:
            "Build enterprise applications using JavaScript and modern frameworks. Includes benefits and growth opportunities.",
        status: "Not Applied",
    },
    {
        id: "j7",
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description:
            "Join a fast-growing startup and work on the core platform. Node.js and React experience required.",
        status: "Not Applied",
    },
    {
        id: "j8",
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description:
            "Build scalable web applications using React and TypeScript with a collaborative team on cutting-edge projects.",
        status: "Not Applied",
    },
];

let activeTab = "all";


// Elements
const contentArea = document.getElementById("contentArea");
const tabCountEl = document.getElementById("tabCount");
const jobsCountText = document.getElementById("jobsCountText");

const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");

const tabs = document.querySelectorAll(".tab");

// handling
function toUpperSafe(text) {
    return String(text).toUpperCase();
}

function emptyStateHTML() {
    return (
        "<div class='empty'>" +
        "<img src='assets/jobs.png' alt='No Jobs' class='empty-img' />" +
        "<h3>No jobs available</h3>" +
        "<p>Check back soon for new job opportunities</p>" +
        "</div>"
    );
}

function cardHTML(job) {
    let statusClass = "";
    if (job.status === "Interview") statusClass = "interview";
    if (job.status === "Rejected") statusClass = "rejected";

    const interviewSelected = job.status === "Interview" ? "selected" : "";
    const rejectedSelected = job.status === "Rejected" ? "selected" : "";

    return (
        "<article class='card' data-id='" +
        job.id +
        "'>" +
        "<div class='card-top'>" +
        "<div>" +
        "<h3 class='company'>" +
        job.companyName +
        "</h3>" +
        "<div class='position'>" +
        job.position +
        "</div>" +
        "<div class='meta'>" +
        "<span class='badge'>" +
        job.location +
        "</span>" +
        "<span class='badge'>" +
        job.type +
        "</span>" +
        "<span class='badge'>" +
        job.salary +
        "</span>" +
        "</div>" +
        "<div class='status-row'>" +
        "<span class='status-pill " +
        statusClass +
        "'>" +
        toUpperSafe(job.status) +
        "</span>" +
        "</div>" +
        "</div>" +
        "<button class='icon-btn' data-action='delete' title='Delete job' aria-label='Delete job'>🗑️</button>" +
        "</div>" +
        "<p class='desc'>" +
        job.description +
        "</p>" +
        "<div class='actions'>" +
        "<button class='btn btn-interview " +
        interviewSelected +
        "' data-action='interview'>Interview</button>" +
        "<button class='btn btn-rejected " +
        rejectedSelected +
        "' data-action='rejected'>Rejected</button>" +
        "</div>" +
        "</article>"
    );
}


// Render
function render() {
    const total = data.length;
    let interview = 0;
    let rejected = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "Interview") interview++;
        if (data[i].status === "Rejected") rejected++;
    }

    totalCountEl.innerText = total;
    interviewCountEl.innerText = interview;
    rejectedCountEl.innerText = rejected;

    // tab wise show + tab count
    let html = "";
    let visibleCount = 0;

    for (let j = 0; j < data.length; j++) {
        const job = data[j];

        if (activeTab === "all") {
            html += cardHTML(job);
            visibleCount++;
        } else if (activeTab === "interview" && job.status === "Interview") {
            html += cardHTML(job);
            visibleCount++;
        } else if (activeTab === "rejected" && job.status === "Rejected") {
            html += cardHTML(job);
            visibleCount++;
        }
    }

    if (activeTab === "all") {
        jobsCountText.innerText = total + " jobs";
    } else {
        jobsCountText.innerText = visibleCount + " of " + total + " jobs";
    }

    if (visibleCount === 0) {
        contentArea.innerHTML = emptyStateHTML();
    } else {
        contentArea.innerHTML = html;
    }
}


// Tabs
for (let t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener("click", function () {
        for (let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove("active");
        }
        this.classList.add("active");

        activeTab = this.getAttribute("data-tab");
        render();
    });
}


// Event Delegation buttons

contentArea.addEventListener("click", function (e) {
    const button = e.target.closest("button");
    if (!button) return;

    const action = button.getAttribute("data-action");
    if (!action) return;

    const card = button.closest(".card");
    if (!card) return;

    const id = card.getAttribute("data-id");

    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            index = i;
            break;
        }
    }
    if (index === -1) return;

    if (action === "delete") {
        data.splice(index, 1);
        render();
        return;
    }

    if (action === "interview") {
        data[index].status = "Interview";
        render();
        return;
    }

    if (action === "rejected") {
        data[index].status = "Rejected";
        render();
        return;
    }
});

render()