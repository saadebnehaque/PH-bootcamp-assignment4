const cardContainer = document.getElementById('cardContainer');
const total = document.getElementById('totalCount');
total.innerText = cardContainer.childElementCount




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