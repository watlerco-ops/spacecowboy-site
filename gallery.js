/* Space Cowboy site gallery engine - hosted, edit here to update the live site */
(function(){
  function boot(){
(function(){
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){e.classList.add('in');});
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var par = entry.target.parentElement;
        var sibs = par ? Array.prototype.filter.call(par.children, function(c){return c.classList && c.classList.contains('reveal');}) : [];
        var idx = sibs.indexOf(entry.target);
        if(idx > 0){ entry.target.style.transitionDelay = Math.min(idx*80, 400) + 'ms'; }
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  els.forEach(function(e){io.observe(e);});

  document.querySelectorAll('#navlinks a').forEach(function(a){
    a.addEventListener('click',function(){
      document.getElementById('navlinks').classList.remove('open');
    });
  });

  var bar = document.querySelector('.scroll-progress');
  var nav = document.getElementById('topnav');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;
  function onScroll(){
    var st = window.scrollY || document.documentElement.scrollTop;
    if(nav){ nav.classList.toggle('scrolled', st > 30); }
    if(bar && !reduce){
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (st / h) * 100 : 0) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if(!ticking){ window.requestAnimationFrame(onScroll); ticking = true; }
  }, {passive:true});
  onScroll();
})();
})();

(function(){
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // CDN helper for Space Cowboy's hosted project photos (same source as the courts section)
  function cdn(id, w){ return 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_' + (w||1200) + '/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/' + id; }

  // ---- PHOTO SETS ----
  // Seeded with real Space Cowboy photos we already have. Add more objects to any
  // list and both the carousel and the portfolio grid pick them up automatically.
  // Each photo: { src, alt }  (thumb optional; falls back to src)
  var HERO = document.querySelector('.hero-bg');
  var HERO_SRC = ''; // filled below from the hero background (the new sunset/pool drone shot)

  var PHOTOS = {
    courts: {
      title: 'Multi-Use Courts',
      blurb: 'Pickleball, basketball, and multi-use courts built from the subgrade up: engineered slabs, pro acrylic surfacing, regulation striping, lighting, and fencing.',
      items: [
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4de708c41d4df0fe482.jpg', alt: 'Backyard multi-use court with basketball and pickleball in Austin, Texas' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4de4fbc0a89064642fd.jpg', alt: 'Backyard pickleball court with turf surround' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4deeada8c1f4576b9b4.jpg', alt: 'Multi-use court at sunset in the Texas Hill Country' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4de48f3373572285f4f.jpg', alt: 'Blue and gold backyard basketball and pickleball court' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4de46e5b517c5254cb1.jpg', alt: 'Multi-use court with fire pit lounge in San Antonio' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4de4ddb4a8e58f2b32f.jpg', alt: 'Pickleball court with pergola and lounge seating in Austin' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4df46e5b517c5254ccb.jpg', alt: 'Hill Country multi-use court with basketball and pickleball' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4df8b929b11f2feceb8.jpg', alt: 'Fenced multi-use court in the Texas Hill Country' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4dfadefd85d72e19a35.jpg', alt: 'Backyard multi-use court and plunge pool in Austin' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4df48f3373572285f75.jpg', alt: 'Multi-use court with basketball and pickleball lines, aerial view' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4df9c9b37b5fda6162f.jpg', alt: 'Backyard basketball court with pool in San Antonio' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4df48f3373572285f7b.jpg', alt: 'Backyard basketball court in San Antonio' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4e04ddb4a8e58f2b361.jpg', alt: 'Multi-use pickleball court with plunge pool, aerial view' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4e0ac2f159bb081adc9.jpg', alt: 'Hill Country multi-use court and pool at dusk' },
        { src: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1000/u_https://assets.cdn.filesafe.space/Gj6Fk925mIxTX5BTuLLP/media/6a4ee4e18b929b11f2fed2ed.jpg', alt: 'Backyard multi-use court built by Space Cowboy' }
      ]
    },
    outdoor: {
      title: 'Decks, Pergolas and Outdoor Living',
      blurb: 'Composite and hardwood decks, cedar and steel pergolas, and shade structures built to take Texas sun for decades, not seasons.',
      items: [
        { src: cdn('693879d4daae415fda92f479.jpeg'), alt: 'Custom outdoor living space by Space Cowboy' },
        { src: cdn('67ab6aa879284bd4c56a335d.jpeg'), alt: 'Outdoor living and shade project in the Texas Hill Country' }
      ]
    },
    wellness: {
      title: 'Outdoor Kitchens, Pools & Wellness',
      blurb: 'In-ground pools with built-in spas, custom outdoor kitchens designed for entertaining, saunas, and cold plunges.',
      items: [
        { src: cdn('67ab73b23afbd4fe56ae875d.jpeg'), alt: 'Outdoor amenity and pool project in the Texas Hill Country' }
      ]
    },
    reno: {
      title: 'Renovations & General Contracting',
      blurb: 'Whole-home remodels, additions, and finished interiors and exteriors, delivered with high-quality craftsmanship from concept to completion.',
      items: [
        { src: cdn('67576714988a5fae66a22dae.jpeg'), alt: 'Home renovation and addition project by Space Cowboy' }
      ]
    }
  };

  // Pull the hero drone shot (has the pool) into the Pools & Wellness set
  if(HERO){
    var bg = getComputedStyle(HERO).backgroundImage || '';
    var m = bg.match(/url\(["']?(data:image[^"')]+)["']?\)/);
    if(m){ PHOTOS.wellness.items.unshift({ src: m[1], alt: 'Hill Country pool and outdoor living build at golden hour' }); }
  }

  // ---- Build each card carousel ----
  var cards = document.querySelectorAll('.svc[data-cat]');
  cards.forEach(function(card){
    var cat = card.getAttribute('data-cat');
    var set = PHOTOS[cat];
    if(!set) return;
    var stage = card.querySelector('.svc-stage');
    var dotsWrap = card.querySelector('.svc-dots');
    var countEl = card.querySelector('.svc-count');
    var items = set.items;

    countEl.textContent = items.length + (items.length === 1 ? ' project' : ' projects');
    var _h3 = card.querySelector('.svc-cap h3'); if(_h3){ _h3.textContent = set.title; }

    items.forEach(function(it, i){
      var img = document.createElement('img');
      img.className = 'svc-slide' + (i === 0 ? ' on' : '');
      img.src = it.src; img.alt = it.alt; img.loading = 'lazy';
      stage.appendChild(img);
      if(items.length > 1){
        var dot = document.createElement('span');
        dot.className = 'svc-dot' + (i === 0 ? ' on' : '');
        dotsWrap.appendChild(dot);
      }
    });

    var slides = stage.querySelectorAll('.svc-slide');
    var dots = dotsWrap.querySelectorAll('.svc-dot');
    var cur = 0, timer = null;
    function show(n){
      slides[cur].classList.remove('on'); if(dots[cur]) dots[cur].classList.remove('on');
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add('on'); if(dots[cur]) dots[cur].classList.add('on');
    }
    function start(){
      if(reduce || slides.length < 2 || timer) return;
      timer = setInterval(function(){ show(cur + 1); }, 3200);
    }
    function stop(){ if(timer){ clearInterval(timer); timer = null; } }

    // auto-play only while the card is on screen
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(es){
        es.forEach(function(e){ e.isIntersecting ? start() : stop(); });
      },{threshold:0.35}).observe(card);
    } else { start(); }

    card.addEventListener('mouseenter', stop);
    card.addEventListener('mouseleave', start);
    card.addEventListener('click', function(){ openModal(cat); });
  });

  // ---- Portfolio modal ----
  var modal = document.getElementById('pfModal');
  var grid = document.getElementById('pfGrid');
  var titleEl = document.getElementById('pfTitle');
  var blurbEl = document.getElementById('pfBlurb');
  var eyebrowEl = document.getElementById('pfEyebrow');
  var lb = document.getElementById('pfLightbox');
  var lbImg = document.getElementById('pfLightboxImg');
  var lastFocus = null;

  function openModal(cat){
    var set = PHOTOS[cat]; if(!set) return;
    lastFocus = document.activeElement;
    eyebrowEl.textContent = 'Portfolio';
    titleEl.textContent = set.title;
    blurbEl.textContent = set.blurb;
    grid.innerHTML = '';
    if(!set.items.length){
      grid.innerHTML = '<p class="pf-empty">Photos coming soon.</p>';
    } else {
      set.items.forEach(function(it){
        var img = document.createElement('img');
        img.src = it.src; img.alt = it.alt; img.loading = 'lazy';
        img.addEventListener('click', function(){
          lbImg.src = it.src.replace(/r_\d+/, 'r_1600'); lbImg.alt = it.alt;
          lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
        });
        grid.appendChild(img);
      });
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('pfClose').focus();
  }
  function closeModal(){
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if(lastFocus) lastFocus.focus();
  }
  document.getElementById('pfClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });
  lb.addEventListener('click', function(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(lb.classList.contains('open')){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); }
      else if(modal.classList.contains('open')){ closeModal(); }
    }
  });

  // GHL hardening: move overlays to <body> so builder wrappers cannot clip/trap them
  [modal, lb].forEach(function(el){ if(el && el.parentElement !== document.body){ document.body.appendChild(el); } });
  // make the courts feature image and thumbnail strip open the courts gallery
  document.querySelectorAll('.court-feature img, .court-strip img').forEach(function(im){
    im.style.cursor = 'zoom-in';
    im.addEventListener('click', function(){ openModal('courts'); });
  });


  // show the clean cowboy mark (no circle badge)
  var _LOGO='https://watlerco-ops.github.io/spacecowboy-site/logo.webp';
  document.querySelectorAll('.logo-badge').forEach(function(el){
    el.style.display=''; el.style.background='none'; el.style.backgroundColor='transparent';
    el.style.borderRadius='0'; el.style.width='auto'; el.style.height='auto';
    el.style.minWidth='0'; el.style.padding='0'; el.style.margin='0 10px 0 0';
    el.style.overflow='visible'; el.style.boxShadow='none'; el.style.border='none';
  });
  document.querySelectorAll('.logo-badge img').forEach(function(im){
    im.src=_LOGO; im.style.width='auto'; im.style.height='40px'; im.style.maxWidth='none';
    im.style.borderRadius='0'; im.style.objectFit='contain'; im.style.display='block';
  });

})();
})();
  }
  var tries = 0;
  function tryBoot(){
    if(document.querySelector('.svc[data-cat]') || tries > 25){ boot(); }
    else { tries++; setTimeout(tryBoot, 150); }
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', tryBoot); }
  else { tryBoot(); }
})();
