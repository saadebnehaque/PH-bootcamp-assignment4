const cardContainer = document.getElementById('cardContainer');
const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const availableJobsText = document.getElementById('availableJobs');
const noJobMessage = document.getElementById('noJob');
const cards = document.querySelectorAll('.card');
const tabs = document.querySelectorAll('.tabBtn');



function applyFilter(tabName) {
    let count = 0;
    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText;

        let shouldShow;
        if (tabName === 'All') {
            shouldShow = true;
        } else if (tabName === statusText) {
            shouldShow = true;
        } else {
            shouldShow = false;
        };

        if (shouldShow) {
            card.classList.remove('hidden');
            count++;
        } else {
            card.classList.add('hidden');
        };


    })
    availableJobsText.innerText = `${count} jobs`;

    if (count === 0) {
        noJobMessage.classList.remove('hidden');
    } else {
        noJobMessage.classList.add('hidden');
    }
}


function updateNumbers() {
    let interviewCount = 0;
    let rejectedCount = 0;
    cards.forEach(card => {
        const statusText = card.querySelector('.status').innerText;
        if (statusText === 'Interview') interviewCount++;
        if (statusText === 'Rejected') rejectedCount++;
    })

    totalCountEl.innerText = cards.length;
    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;

    const activeTab = document.querySelector('.tabBtn.text-white');
    const activeTabName = activeTab ? activeTab.innerText : 'All';
    applyFilter(activeTabName);
}
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(tabBtn => {
            tabBtn.classList.remove('text-white', 'bg-[#3B82F6]');
            tabBtn.classList.add('text-[#64748B]', 'bg-white');
        })
        tab.classList.add('text-white', 'bg-[#3B82F6]');
        tab.classList.remove('text-[#64748B]', 'bg-white');

        applyFilter(tab.innerText);
    })
})

cardContainer.addEventListener('click', function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest('.card');
    if (!card) return;

    const status = card.querySelector('.status');
    if (clickedElement.innerText === 'interview') {
        status.innerHTML = `<button class="statusGreen px-3 py-2 bg-[#bbfae5] text-[#10B981] border font-medium rounded">Interview</button>`

    } else if (clickedElement.innerText === 'Rejected') {
        console.log('rh')
    }
})

updateNumbers()