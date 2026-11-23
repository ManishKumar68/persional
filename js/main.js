var S = DATA;

function $(id) {
  return document.getElementById(id);
}

function esc(value) {
  var div = document.createElement('div');
  div.textContent = value == null ? '' : String(value);
  return div.innerHTML;
}

function safe(value) {
  if (!value) return '';
  try {
    var url = new URL(value, window.location.href);
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol) ? url.href : '';
  } catch (_) {
    return '';
  }
}

function archives() {
  var table = $('ptable');
  if (!table) return;
  table.innerHTML =
    '<tr><th class="n">No.</th><th>Project</th><th>Type / Technology</th></tr>' +
    S.projects.map(function (p) {
      return '<tr><td class="n">' + p.id +
        '</td><td><a href="#project-' + p.id + '">' + esc(p.title) + '</a></td>' +
        '<td>' + esc(p.tech || '-') + '</td></tr>';
    }).join('');
}

function detail(id) {
  var p = S.projects.find(function (item) { return String(item.id) === String(id); });
  var v = $('v-project');
  if (!p) {
    v.innerHTML = '<h2>Not found</h2><p><a href="#archives">&laquo; Back to Archives</a></p>';
    return;
  }

  var h = '<h2>Project ' + p.id + ': ' + esc(p.title) + '</h2>';
  h += '<div class="sec"><h3>Overview</h3><p>' + esc(p.desc) + '</p><p><strong>Built with:</strong> ' + esc(p.tech || '-') + '</p></div>';
  if (p.shot) h += '<div class="sec"><h3>Screenshot</h3><img class="shot" alt="' + esc(p.title) + '" src="' + esc(p.shot) + '" loading="lazy"></div>';
  if (p.explain) h += '<div class="sec"><h3>How it works</h3><p>' + esc(p.explain) + '</p></div>';
  if (p.feat) h += '<div class="sec"><h3>Features</h3><ul class="f">' + p.feat.split('\n').filter(Boolean).map(function (line) { return '<li>' + esc(line) + '</li>'; }).join('') + '</ul></div>';
  if (p.folder) h += '<div class="sec"><h3>Project Structure</h3><pre class="code-block">' + esc(p.folder) + '</pre></div>';
  if (p.files && p.files.length) {
    h += '<div class="sec"><h3>Key Files</h3><div class="tw"><table><tr><th>File</th><th>Purpose</th></tr>' +
      p.files.map(function (f) { return '<tr><td>' + esc(f.name) + '</td><td>' + esc(f.desc) + '</td></tr>'; }).join('') +
      '</table></div></div>';
  }
  if (p.zip) h += '<div class="sec"><h3>Download</h3><p><a class="btn" href="' + esc(p.zip) + '" download>Download source (.zip)</a></p></div>';
  var links = (p.links || []).map(function (link) { return { label: link.label, url: safe(link.url) }; }).filter(function (link) { return link.url; });
  if (links.length) {
    h += '<div class="sec"><h3>Links</h3><ul class="f">' +
      links.map(function (link) { return '<li><a href="' + esc(link.url) + '" target="_blank" rel="noopener">' + esc(link.label) + '</a></li>'; }).join('') +
      '</ul></div>';
  }
  if (!p.explain && !p.feat && !p.shot && !p.folder && !(p.files && p.files.length) && !p.zip) {
    h += '<p>Details have not been added yet.</p>';
  }
  h += '<p><a href="#archives">&laquo; Back to Archives</a></p>';
  v.innerHTML = h;
}

function search(query) {
  var results = $('search-results');
  var words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) {
    results.textContent = 'Enter a search term.';
    return;
  }

  var matches = [];
  S.projects.forEach(function (project) {
    var text = [project.title, project.desc, project.tech, project.explain, project.feat].filter(Boolean).join(' ');
    if (words.every(function (word) { return text.toLowerCase().includes(word); })) {
      matches.push({ title: project.title, href: '#project-' + project.id, excerpt: project.desc });
    }
  });
  document.querySelectorAll('.view:not(#v-project):not(#v-archives)').forEach(function (view) {
    var text = view.textContent.replace(/\s+/g, ' ').trim();
    if (text && words.every(function (word) { return text.toLowerCase().includes(word); })) {
      var heading = view.querySelector('h2');
      matches.push({
        title: heading ? heading.textContent : view.id.replace(/^v-/, ''),
        href: '#' + view.id.replace(/^v-/, ''),
        excerpt: text
      });
    }
  });

  if (!matches.length) {
    results.textContent = 'No results found.';
    return;
  }

  results.innerHTML = matches.slice(0, 10).map(function (match) {
    return '<a class="search-result" href="' + esc(match.href) + '"><strong>' + esc(match.title) +
      '</strong><span>' + esc(match.excerpt) + '</span></a>';
  }).join('');
}

function resumeList(items) {
  return '<ul class="resume-list">' + items.map(function (item) {
    return '<li>' + esc(item) + '</li>';
  }).join('') + '</ul>';
}

function renderBlog(items) {
  if (!Array.isArray(items) || !items.length) {
    return '<p>New blog updates will appear here.</p>';
  }
  return items.map(function (item) {
    return '<article class="blog-post"><p class="resume-meta">' + esc(item.date) + '</p>' +
      '<h3>' + esc(item.title) + '</h3><p>' + esc(item.summary) + '</p></article>';
  }).join('');
}

function renderResume(resume) {
  if (!resume || typeof resume !== 'object') return 'Resume details have not been added yet.';

  var skills = resume.skills.map(function (skill) {
    return '<li><strong>' + esc(skill.category) + ':</strong> ' + esc(skill.items) + '</li>';
  }).join('');
  var training = resume.training;
  var experience = resume.experience;
  var projects = resume.projects.map(function (project) {
    return '<article class="resume-item"><h4>' + esc(project.title) + '</h4>' +
      (project.technologies ? '<p class="resume-meta">' + esc(project.technologies) + '</p>' : '') +
      resumeList(project.details) + '</article>';
  }).join('');
  var education = resume.education.map(function (item) {
    return '<article class="resume-item"><h4>' + esc(item.degree) + '</h4><p>' + esc(item.institution) +
      '</p><p class="resume-meta">' + esc(item.period) + ' · ' + esc(item.result) + '</p></article>';
  }).join('');

  return '<div class="resume-contact"><strong>MANISH KUMAR</strong><br>' +
    '<a href="' + esc(safe('tel:' + S.site.phone)) + '">' + esc(S.site.phone) + '</a> | ' +
    '<a href="' + esc(safe('mailto:' + S.site.email)) + '">' + esc(S.site.email) + '</a></div>' +
    '<section class="resume-section"><h3>Professional Summary</h3><p>' + esc(resume.summary) + '</p></section>' +
    '<section class="resume-section"><h3>Technical Skills</h3><ul class="resume-list">' + skills + '</ul></section>' +
    '<section class="resume-section"><h3>Training</h3><article class="resume-item"><h4>' + esc(training.title) +
    '</h4><p>' + esc(training.organization) + '</p><p class="resume-meta">' + esc(training.period) +
    '</p>' + resumeList(training.details) + '</article></section>' +
    '<section class="resume-section"><h3>Experience</h3><article class="resume-item"><h4>' + esc(experience.role) +
    ' · ' + esc(experience.organization) + '</h4><p class="resume-meta">' + esc(experience.period) +
    ' · ' + esc(experience.location) + '</p>' + resumeList(experience.details) +
    '</article></section><section class="resume-section"><h3>Projects</h3>' + projects +
    '</section><section class="resume-section"><h3>Education</h3>' + education + '</section>';
}

function route() {
  var hash = window.location.hash.replace(/^#/, '') || 'about';
  var section = hash.indexOf('project-') === 0 ? 'project' : hash;
  var valid = ['about', 'archives', 'recent', 'progress', 'resume', 'news', 'contact', 'project'];
  if (valid.indexOf(section) === -1) section = 'about';

  document.querySelectorAll('.view').forEach(function (view) {
    view.classList.toggle('on', view.id === 'v-' + section);
  });
  document.querySelectorAll('nav a[data-v]').forEach(function (link) {
    link.classList.toggle('on', link.dataset.v === section);
  });

  if (section === 'project') detail(hash.slice('project-'.length));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function init() {
  archives();

  var dt = $('dt');
  var year = $('year');
  function updateDateTime() {
    var now = new Date();
    if (dt) dt.textContent = now.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    if (year) year.textContent = String(now.getFullYear());
  }
  updateDateTime();
  window.setInterval(updateDateTime, 60000);

  var resume = $('r-body');
  if (resume) resume.innerHTML = renderResume(S.site.resume);

  var blog = $('b-body');
  if (blog) blog.innerHTML = renderBlog(S.site.blog);

  var contact = $('c-body');
  if (contact) {
    var parts = [];
    var email = S.site.email ? safe('mailto:' + S.site.email) : '';
    var github = safe(S.site.github);
    var linkedin = safe(S.site.linkedin);
    var phone = S.site.phone ? safe('tel:' + S.site.phone) : '';
    if (email) parts.push('Email: <a href="' + esc(email) + '">' + esc(S.site.email) + '</a>');
    if (phone) parts.push('Phone: <a href="' + esc(phone) + '">' + esc(S.site.phone) + '</a>');
    if (github) parts.push('GitHub: <a href="' + esc(github) + '" target="_blank" rel="noopener">' + esc(github) + '</a>');
    if (linkedin) parts.push('LinkedIn: <a href="' + esc(linkedin) + '" target="_blank" rel="noopener">' + esc(linkedin) + '</a>');
    contact.innerHTML = parts.length ? parts.join('<br>') : 'Contact details have not been added yet.';
  }

  var searchToggle = $('search-toggle');
  var searchForm = $('site-search');
  var searchInput = $('search-query');
  if (searchToggle && searchForm && searchInput) {
    searchToggle.addEventListener('click', function () {
      var opening = searchForm.hidden;
      searchForm.hidden = !opening;
      searchToggle.setAttribute('aria-expanded', String(opening));
      if (opening) searchInput.focus();
    });
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      search(searchInput.value);
    });
    searchForm.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        searchForm.hidden = true;
        searchToggle.setAttribute('aria-expanded', 'false');
        searchToggle.focus();
      }
    });
    $('search-results').addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        searchForm.hidden = true;
        searchToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  window.addEventListener('hashchange', route);
  route();
}

document.addEventListener('DOMContentLoaded', init);