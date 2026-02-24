const cardContainer = document.getElementById('cardContainer');

const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const availableJobsText = document.getElementById('availableJobs');
const noJobMessage = document.getElementById('noJob');
const tabs = document.querySelectorAll('.tabBtn');


function updateDashboard() {
    let interviewCount = 0;
    let rejectedCount = 0;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText;
        if (statusText.toLowerCase() === 'interview') interviewCount++;
        if (statusText.toLowerCase() === 'rejected') rejectedCount++;
    })

    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;
    totalCountEl.innerText = cards.length;


    const activeTabBtn = document.querySelector('.tabBtn.text-white');
    let activeTabName;
    if (activeTabBtn) {
        activeTabName = activeTabBtn.innerText;
    } else {
        activeTabName = 'All';
    }
    applyFilter(activeTabName);
}


function applyFilter(filterType) {
    let visibleCount = 0;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText;
        const shouldShow = (filterType === 'All' || filterType.toLowerCase() === statusText.toLowerCase());

        if (shouldShow) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    })

    if (filterType === 'interview' || filterType === 'rejected') {
        availableJobsText.innerText = `${visibleCount} of ${cards.length} jobs`;
    } else {
        availableJobsText.innerText = `${visibleCount} jobs`;
    }


    if (visibleCount === 0) {
        noJobMessage.classList.remove('hidden')
    } else {
        noJobMessage.classList.add('hidden')
    }
}


tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(btn => {
            btn.classList.remove('text-white', 'bg-[#3B82F6]');
            btn.classList.add('text-[#64748B]', 'bg-white', 'border-[#F1F2F4]');
        })
        this.classList.add('text-white', 'bg-[#3B82F6]');
        this.classList.remove('text-[#64748B]', 'bg-white', 'border-[#F1F2F4]');

        applyFilter(this.innerText.toLowerCase())

    })
})


cardContainer.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (!card) return;

    const statusDiv = card.querySelector('.status');

    if (e.target.innerText.toLowerCase() === 'interview') {
        statusDiv.innerHTML = `<button class="statusGreen px-3 py-2 bg-[#bbfae5] text-[#10B981] border font-medium rounded">Interview</button>
`
        updateDashboard()
    } else if (e.target.innerText.toLowerCase() === 'rejected') {
        statusDiv.innerHTML = `  <button class="statusRed px-3 py-2 bg-[#fdc0c0] text-[#EF4444] border font-medium rounded">Rejected</button>`
        updateDashboard()
    } else if (e.target.closest('.dltBtn')) {
        card.remove();
        updateDashboard();
    }


});

updateDashboard();

