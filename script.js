const cardContainer = document.getElementById('cardContainer');
const totalJobs = cardContainer.childElementCount;
const total = document.getElementById('totalCount');
total.innerText = totalJobs;
const availableJobs = document.getElementById('availableJobs');
availableJobs.innerText =totalJobs+' jobs';



// Tab Toggle

const tabBtn = document.querySelectorAll('.tabBtn');

tabBtn.forEach(tab => {
    tab.addEventListener('click', () => {
        tabBtn.forEach(btn => {
            btn.classList.remove('bg-[#3B82F6]', 'text-white', 'border-transparent');
            btn.classList.add('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]')
        })
        tab.classList.add('bg-[#3B82F6]', 'text-white', 'border-transparent')
        tab.classList.remove('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]')
    })

})