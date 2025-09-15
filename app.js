document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').classList.add('hidden');
  }, 1200);
});

const chips = document.querySelectorAll('.chip');
const frames = document.querySelectorAll('.gallery .frame');
chips.forEach(chip=>{
  chip.addEventListener('click', ()=>{
    chips.forEach(c=>c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const cat = chip.dataset.filter;
    frames.forEach(f=>{
      const ok = (cat==='all' || f.dataset.cat===cat);
      f.style.display = ok ? '' : 'none';
    });
  });
});

const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const capTitle = lb.querySelector('.lb-caption strong');
const capType = lb.querySelector('.lb-caption span');
const capDesc = lb.querySelector('.lb-caption small');

document.querySelectorAll('.gallery .frame').forEach(fig=>{
  fig.addEventListener('click', ()=>{
    const img = fig.querySelector('img');      
    if (!img) return;                         
    const label = fig.querySelector('.label');
    lbImg.src = img.src;
    capTitle.textContent = label.querySelector('strong')?.textContent || '';
    capType.textContent  = label.querySelector('span')?.textContent || '';
    capDesc.textContent  = label.querySelector('small')?.textContent || '';
    lb.showModal();
  });
});

lb.querySelector('.lb-close').addEventListener('click', ()=> lb.close());
lb.addEventListener('click', (e)=> { if (e.target === lb) lb.close(); });

