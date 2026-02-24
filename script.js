const cardContainer = document.getElementById('cardContainer');
const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const availableJobsText = document.getElementById('availableJobs');
const noJobMessage = document.getElementById('noJob');
const tabs = document.querySelectorAll('.tabBtn');


function updateDashboard() {
    const cards = document.querySelectorAll('.card');
    let interviewCount = 0;
    let rejectedCount = 0;


    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText.trim().toLowerCase();

        if (statusText === 'interview') interviewCount++;
        if (statusText === 'rejected') rejectedCount++;
    })

    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;
    totalCountEl.innerText = cards.length;


    const activeTabBtn = document.querySelector('.tabBtn.text-white');
    let activeTabName;
    if (activeTabBtn) {
        activeTabName = activeTabBtn.innerText.toLowerCase();
    } else {
        activeTabName = 'all';
    }
    applyFilter(activeTabName);
}


function applyFilter(filterType) {
    const cards = document.querySelectorAll('.card'); 
    let visibleCount = 0;
    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText.trim().toLowerCase(); 
        const shouldShow = (filterType === 'all' || filterType === statusText); 

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
    const clickedText = e.target.innerText.trim().toLowerCase();

    if (clickedText === 'interview') { 
        statusDiv.innerHTML = `<button class="statusGreen px-3 py-2 bg-[#bbfae5] text-[#10B981] border font-medium rounded">Interview</button>
`
        updateDashboard()
    } else if (clickedText === 'rejected') { 
        statusDiv.innerHTML = `  <button class="statusRed px-3 py-2 bg-[#fdc0c0] text-[#EF4444] border font-medium rounded">Rejected</button>`
        updateDashboard()
    } else if (e.target.closest('.dltBtn')) {
        card.remove();
        updateDashboard();
    }


});

updateDashboard();