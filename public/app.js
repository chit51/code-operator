const routes = ["/", "/projects", "/student", "/task", "/repo-submission", "/career", "/apply", "/pricing", "/about", "/contact", "/Internship-status", "/apply-form", "/payment", "/id-card-selection"];

const icons = ["</>", "🏆", "💼", "📄", "👥", "🧭"];
const features = [
  ["Project-Based Learning", "Work on real client-style projects that solve actual business problems and build a portfolio employers can explore."],
  ["Industry Certification", "Earn a verifiable completion certificate that validates your work, consistency, and technical skills."],
  ["Career Preparation", "Practice interviews, improve your resume, and learn how professional teams ship software."],
  ["Portfolio Development", "Complete polished projects with documentation, source code, and deployment-ready presentation."],
  ["Peer Learning Community", "Learn with an active community, exchange feedback, and grow alongside other interns."],
  ["Structured Learning Path", "Follow clear milestones with weekly tasks, progress tracking, review, and practical outcomes."]
];
const technologies = [
  ["⚛", "React", "Frontend", "Modern interfaces and component architecture", "95%", "3-4"],
  ["⬢", "Node.js", "Backend", "Scalable APIs and server-side applications", "High", "3-4"],
  ["◉", "MongoDB", "Database", "Flexible data models for modern products", "High", "2-3"],
  ["JS", "JavaScript", "Frontend", "The language of interactive web experiences", "99%", "All"],
  ["🐍", "Python", "Backend", "Automation, data science, and backend foundations", "#1", "2-3"],
  ["☁", "AWS", "DevOps", "Cloud deployment and infrastructure basics", "32%", "1-2"],
  ["▣", "Docker", "DevOps", "Consistent local and production environments", "85%", "1-2"],
  ["⌘", "Git", "DevOps", "Professional version control and collaboration", "99%", "All"]
];
const internships = [
  ["Full Stack Java", "Java + React + Database", "☕"],
  ["Java Internship", "Core Java programming", "♨"],
  ["Web Development", "HTML, CSS, JavaScript", "🌐"],
  ["Python Internship", "Python programming basics", "🐍"],
  ["Data Science", "Python, ML, Analytics", "📊"],
  ["Digital Marketing", "Social media, SEO, Ads", "📣"],
  ["HR Internship", "Human Resources", "🤝"],
  ["Business Development", "Sales & Marketing", "📈"],
  ["Content Writing", "Articles, blogs, SEO", "✍"],
  ["Graphic Design", "Photoshop, Canva", "🎨"],
  ["Video Editing", "Premiere Pro, After Effects", "🎬"]
];

const idPlans = [
  { name: "Standard ID Card", price: 299, features: ["Digital intern ID", "Verified certificate", "Project resources", "Subject-wise tasks"] },
  { name: "Premium ID Card", price: 599, features: ["Everything in Standard", "Career resources", "Priority support", "Progress dashboard"] }
];

const internshipDegrees = {
  "Full Stack Java": "MCA, BCA, BSc, BTech",
  "Java Internship": "MCA, BCA, BSc, BTech",
  "Web Development": "MCA, BCA, BSc, BTech",
  "Python Internship": "MCA, BCA, BSc, BTech",
  "Data Science": "MCA, BCA, BSc, BTech",
  "Digital Marketing": "BBA, MBA, BCom, BSc",
  "HR Internship": "BBA, MBA, BCom, BA",
  "Business Development": "BBA, MBA, BCom",
  "Content Writing": "BA, BCom, BSc",
  "Graphic Design": "BA, BDes, BSc",
  "Video Editing": "BA, BMM, BSc"
};

const taskCatalog = {
  "Full Stack Java": [
    ["Set up Java and React workspace", "Create the Spring Boot API and React client repositories.", "Setup"],
    ["Design relational database entities", "Model users, products, orders, and relationships with JPA.", "Database"],
    ["Build REST APIs with Spring Boot", "Create validated CRUD endpoints and consistent responses.", "Backend"],
    ["Implement JWT authentication", "Secure protected endpoints and role-based access.", "Security"],
    ["Connect the React frontend", "Consume APIs and build loading, success, and error states.", "Frontend"],
    ["Test, deploy, and document", "Add tests, deployment configuration, and a complete README.", "Deployment"]
  ],
  "Java Internship": [
    ["Java environment and Git setup", "Configure the JDK, IDE, repository, and project structure.", "Setup"],
    ["Object-oriented programming", "Build classes using encapsulation, inheritance, and interfaces.", "Core Java"],
    ["Collections and exception handling", "Process data safely using collections and custom exceptions.", "Core Java"],
    ["File handling mini project", "Create a console application with persistent file storage.", "Project"],
    ["JDBC database integration", "Connect Java to a relational database and perform CRUD operations.", "Database"],
    ["Testing and documentation", "Add unit tests and explain the application architecture.", "Quality"]
  ],
  "Web Development": [
    ["Build a semantic landing page", "Create an accessible HTML structure for a real product.", "HTML"],
    ["Create responsive layouts", "Use CSS Grid, Flexbox, and mobile breakpoints.", "CSS"],
    ["Add interactive JavaScript", "Build menus, validation, filters, and dynamic UI states.", "JavaScript"],
    ["Consume a public API", "Fetch, display, search, and handle API errors.", "API"],
    ["Build a complete portfolio project", "Combine the skills into a polished multi-page website.", "Project"],
    ["Deploy and document", "Publish the project and write setup and feature documentation.", "Deployment"]
  ],
  "Python Internship": [
    ["Python environment and Git setup", "Create a virtual environment and structured repository.", "Setup"],
    ["Functions and data structures", "Solve practical problems with reusable Python functions.", "Python"],
    ["Object-oriented Python", "Model a real system with classes and clean modules.", "OOP"],
    ["Work with files and APIs", "Read structured data and consume an external REST API.", "Integration"],
    ["Build an automation project", "Automate a repetitive workflow with logging and validation.", "Project"],
    ["Test and document", "Add automated tests and professional project documentation.", "Quality"]
  ],
  "Data Science": [
    ["Prepare the analysis environment", "Set up Jupyter, Pandas, NumPy, and a clean repository.", "Setup"],
    ["Clean a real dataset", "Handle missing values, duplicates, types, and outliers.", "Data"],
    ["Exploratory data analysis", "Find patterns using statistics and visualizations.", "Analysis"],
    ["Build a machine-learning model", "Train, validate, and compare predictive models.", "Machine Learning"],
    ["Create an interactive dashboard", "Present insights with a clear data story.", "Visualization"],
    ["Publish the final case study", "Document methodology, limitations, and business findings.", "Portfolio"]
  ],
  "Digital Marketing": [
    ["Create a brand audit", "Review audience, positioning, channels, and competitors.", "Strategy"],
    ["Build a content calendar", "Plan four weeks of platform-specific content.", "Content"],
    ["Perform SEO keyword research", "Map search intent and keywords to useful pages.", "SEO"],
    ["Design a paid campaign", "Define targeting, creative, budget, and conversion goals.", "Advertising"],
    ["Set up campaign analytics", "Create a measurement plan and reporting dashboard.", "Analytics"],
    ["Present a growth strategy", "Combine findings into an actionable marketing proposal.", "Portfolio"]
  ],
  "HR Internship": [
    ["Create a job description", "Write a clear role profile and candidate requirements.", "Recruitment"],
    ["Build a screening scorecard", "Create a fair and repeatable candidate evaluation system.", "Hiring"],
    ["Design an onboarding checklist", "Plan a professional first-week employee experience.", "Onboarding"],
    ["Draft HR policy documents", "Prepare concise leave, conduct, and remote-work policies.", "Policy"],
    ["Create an engagement survey", "Measure employee experience and summarize results.", "Engagement"],
    ["Complete an HR operations case study", "Present recommendations based on a realistic scenario.", "Portfolio"]
  ],
  "Business Development": [
    ["Research the target market", "Define customer segments, competitors, and opportunities.", "Research"],
    ["Build a prospect list", "Create a qualified lead sheet with clear selection criteria.", "Sales"],
    ["Write outreach sequences", "Prepare professional email and LinkedIn messages.", "Communication"],
    ["Create a sales pipeline", "Track stages, follow-ups, probability, and next actions.", "CRM"],
    ["Prepare a client proposal", "Present value, scope, timeline, and commercial terms.", "Proposal"],
    ["Deliver a growth case study", "Recommend a measurable business development strategy.", "Portfolio"]
  ],
  "Content Writing": [
    ["Define audience and tone", "Create a practical brand voice and reader persona.", "Strategy"],
    ["Write an SEO blog article", "Research and produce a structured long-form article.", "SEO"],
    ["Create website copy", "Write benefit-led homepage and service-page content.", "Copywriting"],
    ["Build a social content pack", "Create platform-specific posts and calls to action.", "Social"],
    ["Edit for clarity and accuracy", "Apply a professional editing and fact-checking workflow.", "Editing"],
    ["Publish a writing portfolio", "Present polished samples with context and outcomes.", "Portfolio"]
  ],
  "Graphic Design": [
    ["Create a visual moodboard", "Define style, references, colors, and typography.", "Research"],
    ["Design a brand identity", "Create a logo concept and basic brand guidelines.", "Branding"],
    ["Build a social media kit", "Design consistent posts for multiple formats.", "Social"],
    ["Create a marketing poster", "Apply hierarchy, composition, and persuasive messaging.", "Print"],
    ["Design a web landing page", "Create a responsive high-fidelity interface mockup.", "UI Design"],
    ["Publish a design case study", "Present process, iterations, and final deliverables.", "Portfolio"]
  ],
  "Video Editing": [
    ["Organize an editing project", "Set up footage, audio, proxies, and a clean timeline.", "Setup"],
    ["Create a short-form edit", "Produce a paced vertical video with captions.", "Editing"],
    ["Edit a narrative sequence", "Use continuity, rhythm, and purposeful transitions.", "Storytelling"],
    ["Improve audio and color", "Clean dialogue and apply consistent color correction.", "Post Production"],
    ["Create motion graphics", "Add titles, lower thirds, and branded animation.", "Motion"],
    ["Export a showreel", "Deliver platform-ready files and a polished portfolio reel.", "Portfolio"]
  ]
};

function nav() {
  const path = location.pathname;
  return `<nav class="nav"><div class="container nav-inner">
    <a class="brand route-link" href="/" aria-label="Code Operators home"><img class="brand-logo" src="/code-operators-logo.svg" alt="Code Operators"></a>
    <div class="nav-links" id="nav-links">${links.map(([url,label]) => `<a class="nav-link route-link ${path===url?"active":""}" href="${url}">${label}</a>`).join("")}</div>
    <div class="nav-actions"><a class="btn btn-primary btn-sm route-link" href="/apply">Apply Now</a><a class="btn btn-outline btn-sm route-link" href="/contact">☎ Contact</a></div>
    <button class="menu-btn" id="menu-btn" aria-label="Open menu">☰</button>
  </div></nav>`;
}

const links = [["/","Home"],["/projects","Projects"],["/student","Student Programs"],["/task","Intern Tasks"],["/career","Career"],["/apply","Apply"],["/pricing","Pricing"],["/about","About"]];

function footer() {
  return `<section class="cta"><div class="container"><h2>Fastest Growing Tech Learning Community</h2><p>Build practical skills, real projects, and career confidence with a structured internship journey.</p><a class="btn btn-ghost route-link" href="/apply">Join the Community →</a></div></section>
  <footer class="footer"><div class="container"><div class="footer-grid">
    <div><a class="brand route-link" href="/" aria-label="Code Operators home"><img class="brand-logo brand-logo-footer" src="/code-operators-logo.svg" alt="Code Operators"></a><p>Empowering developers with opportunities, practical experience, and career growth.</p></div>
    <div><h4>Navigation</h4><a class="route-link" href="/">Home</a><a class="route-link" href="/projects">Projects</a><a class="route-link" href="/student">Students & Freshers</a><a class="route-link" href="/career">Career</a></div>
    <div><h4>Internship</h4><a class="route-link" href="/task">Intern Tasks</a><a class="route-link" href="/Internship-status">Application Status</a><a class="route-link" href="/apply">Apply Now</a><a class="route-link" href="/pricing">Pricing</a></div>
    <div><h4>Company</h4><a class="route-link" href="/about">About Us</a><a class="route-link" href="/contact">Contact Us</a><a href="#">Privacy Policy</a><a href="#">Terms & Conditions</a></div>
  </div><div class="footer-bottom">© ${new Date().getFullYear()} The Developers Arena. All rights reserved.</div></div></footer>`;
}

function shell(content, withFooter = true) {
  return `${nav()}<main class="page">${content}</main>${withFooter ? footer() : ""}
  <div id="apply-modal" class="id-modal">
    <div class="id-card-large" style="max-width: 540px; text-align: center; background: #0f1629; padding: 40px; border-radius: 12px; border: 1px solid #1e293b; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
      <h2 style="margin: 0 0 10px; font-size: 22px; font-weight: 500; color: #e2e8f0;">ID Card Required</h2>
      <p style="color: #94a3b8; margin: 0 0 32px; font-size: 16px;">You need an ID card to start your internship</p>
      
      <div style="background: transparent; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 24px; margin-bottom: 32px; text-align: left;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px;">
          <h3 style="margin: 0; font-size: 17px; font-weight: 400; color: #f8fafc;">Documents You'll Receive</h3>
          <span style="background: #2563eb; color: white; padding: 4px 12px; border-radius: 99px; font-size: 11px; font-weight: 600;">After Completion</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: center; margin-bottom: 28px;">
          <span style="font-size: 13px; color: #f1f5f9;">Certificate</span>
          <span style="font-size: 13px; color: #f1f5f9;">Exp. Letter</span>
          <span style="font-size: 13px; color: #f1f5f9;">Project</span>
          <span style="font-size: 13px; color: #f1f5f9;">Dashboard</span>
          <span style="font-size: 13px; color: #f1f5f9;">Evaluation</span>
          <span style="font-size: 13px; color: #f1f5f9;">Attendance</span>
        </div>
        
        <div style="height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 16px;"></div>
        <p style="margin: 0; color: #64748b; font-size: 12px;">All documents issued after successful completion</p>
      </div>
      
      <p style="color: #94a3b8; margin: 0 0 24px; font-size: 15px;">Complete your ID card application to unlock these benefits</p>
      
      <a href="/apply-form" class="btn btn-primary btn-wide route-link" id="apply-google-btn" style="background: #2563eb; color: white; border-radius: 6px; padding: 14px; font-size: 16px; font-weight: 500;">Continue to Google Form</a>
      <div style="margin-top: 16px;">
        <button id="apply-cancel-btn" style="background: none; border: none; color: #64748b; font-size: 14px; cursor: pointer; transition: color 0.2s;">Cancel</button>
      </div>
    </div>
  </div>
  <div id="task-submit-modal" class="submission-modal">
    <div class="submission-card">
      <button id="task-submit-close" class="submission-close" type="button">×</button>
      <h2>Submit your task</h2>
      <p>Share the GitHub repository and documentation URL for this task.</p>
      <form id="task-submit-form">
        <div class="field"><label>Repository URL</label><input id="task-submit-repo" name="repoUrl" type="url" required placeholder="https://github.com/username/repo"></div>
        <div class="field"><label>Documentation URL</label><input id="task-submit-doc" name="docsUrl" type="url" required placeholder="https://docs.example.com"></div>
        <div style="margin-top:18px; display:flex; gap:12px; justify-content:flex-end;">
          <button type="button" id="task-submit-cancel" class="btn btn-outline" style="min-width:120px;">Cancel</button>
          <button type="submit" class="btn btn-primary" style="min-width:120px;">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <div id="success-overlay" class="success-overlay">
    <div class="success-card">
      <div class="success-check">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h2 id="success-title">Success!</h2>
      <p id="success-message">Your action was completed.</p>
      <div class="success-redirect">
        <div class="spinner"></div>
        <span id="success-redirect-text">Redirecting...</span>
      </div>
    </div>
  </div>`;
}

function pageHero(title, copy, crumb = "Home") {
  return `<section class="page-hero"><div class="container"><div class="breadcrumb">${crumb} / ${title}</div><h1>${title}</h1><p>${copy}</p></div></section>`;
}

function sectionHead(kicker, title, copy, left = false) {
  return `<div class="section-head ${left?"left":""}"><span class="kicker">${kicker}</span><h2>${title}</h2><p>${copy}</p></div>`;
}

function home() {
  return shell(`
    <section class="hero"><div class="container hero-grid">
      <div class="hero-copy"><span class="eyebrow">🚀 Launch Your Tech Career</span>
        <h1>BRIDGE THE GAP<br><span class="gradient-text">FROM COLLEGE</span><br>TO CORPORATE</h1>
        <p>Real-world projects, industry certification, structured mentorship, and career preparation built for ambitious students.</p>
        <div class="hero-actions"><a class="btn btn-primary route-link" href="/apply">🚀 Start Your Journey</a><a class="btn btn-ghost route-link" href="/projects">▶ See Projects</a></div>
        <div class="mini-stats"><div><strong>4.5K+</strong><span>Interns</span></div><div><strong>92%</strong><span>Completion</span></div><div><strong>14+</strong><span>Companies</span></div><div><strong>4.8/5</strong><span>Rating</span></div></div>
      </div>
      <div class="dashboard"><div class="dash-head"><div><strong>Intern Dashboard</strong><p>Live Progress Tracking</p></div><span class="live">● Active</span></div>
        <div class="progress-card"><div class="row-between"><strong>Web Development</strong><b>85%</b></div><p>12 of 15 tasks complete</p><div class="bar"><span style="width:85%"></span></div></div>
        <div class="project-mini"><div class="row-between"><span>💻 E-Commerce Website</span><span class="live">In Progress</span></div><p>React + Node.js</p></div>
        <div class="project-mini"><div class="row-between"><span>📱 Fitness App</span><span class="live">Completed</span></div><p>React Native</p></div>
        <div class="dash-numbers"><div><strong>3</strong><small>Projects</small></div><div><strong>15</strong><small>Tasks</small></div><div><strong>92%</strong><small>Score</small></div></div>
        <span class="float-pill">👥 5.8K+ Community</span>
      </div>
    </div></section>
    <section class="section section-soft"><div class="container">
      <div class="section-head left"><span class="kicker">Dashboard Access</span><h2>Enter your intern email to unlock the dashboard</h2><p>Use the same email address you enrolled with to access your course tasks, track progress, and submit your GitHub work.</p></div>
      <div class="home-access-grid">
        <div class="access-copy">
          <h3 style="margin-top:0;">Why your internship email matters</h3>
          <p>We match your enrollment record to load your active tasks, project checklist, and dashboard access. Your email confirms you are part of the program and lets you continue from where you left off.</p>
          <ul class="micro-list">
            <li>Enter the email used during internship enrollment</li>
            <li>See tasks assigned to your selected program</li>
            <li>Submit repository and documentation URLs for each task</li>
            <li>Get direct access to your intern dashboard without a separate login</li>
          </ul>
          <p style="margin-top:18px; color:#64748b;">If your email is not found, check your enrollment email or apply first to join the internship program.</p>
        </div>
        <div class="access-form-card">
          <form id="task-login-form" class="task-login-form">
            <div class="field"><label for="home-task-email">Enrollment email address</label><input id="home-task-email" name="email" type="email" required placeholder="you@example.com" autocomplete="email"></div>
            <p class="login-error" id="task-login-error"></p>
            <button class="btn btn-primary btn-wide" type="submit">Unlock Dashboard →</button>
          </form>
        </div>
      </div>
    </div></section>
    <section class="section section-soft"><div class="container">${sectionHead("Progress that matters","Your Personalized Learning Path","Track your progress with a structured internship program designed for maximum practical skill development.")}
      <div class="grid grid-3"><div class="card metric"><strong>90%</strong><h3>Skill Mastery</h3><p>Industry-relevant skills completion rate</p></div><div class="card metric"><strong>75%</strong><h3>Project Completion</h3><p>Real-world projects finished</p></div><div class="card metric"><strong>95%</strong><h3>Certification Rate</h3><p>Interns receiving certificates</p></div></div>
    </div></section>
    <section class="section"><div class="container">${sectionHead("Built for outcomes","Our Internship Features","Everything you need to gain practical experience and launch your technology career in one focused program.")}
      <div class="grid grid-3">${features.map((f,i)=>`<article class="card"><div class="icon">${icons[i]}</div><h3>${f[0]}</h3><p>${f[1]}</p><a class="card-link route-link" href="/student">Learn more →</a></article>`).join("")}</div>
    </div></section>
    <section class="section section-dark"><div class="container">${sectionHead("Three focused pathways","Skills You Will Master","Gain industry-relevant skills through hands-on projects that prepare you for real-world challenges.")}
      <div class="skills-layout">${[
        ["Web Development","Full-Stack Applications","90%","React","Node.js","MongoDB","JavaScript"],
        ["Data Science","ML & Analytics","85%","Python","ML Algorithms","DataViz","Pandas"],
        ["Mobile Development","Cross-Platform Apps","80%","React Native","App Store","Play Store","UI/UX"]
      ].map(s=>`<article class="skill-card"><div class="icon">&lt;/&gt;</div><h3>${s[0]}</h3><p>${s[1]}</p><div class="row-between"><small>Skill Mastery</small><b>${s[2]}</b></div><div class="bar"><span style="width:${s[2]}"></span></div><div class="tags">${s.slice(3).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`).join("")}</div>
    </div></section>
    <section class="section section-soft"><div class="container">${sectionHead("Industry standard stack","Technologies You'll Master","Learn tools and technologies that modern companies use in production environments.")}
      <div class="filters" data-filter-group="tech"><button class="filter active" data-filter="All">All Technologies</button>${["Frontend","Backend","Database","DevOps"].map(x=>`<button class="filter" data-filter="${x}">${x}</button>`).join("")}</div>
      <div class="grid grid-4" id="tech-grid">${technologies.map(t=>`<article class="card tech-card" data-category="${t[2]}"><div class="tech-top"><div class="icon">${t[0]}</div><div><small class="kicker">${t[2]}</small><h3>${t[1]}</h3></div></div><p>${t[3]}</p><div class="tech-meta"><span>Industry: <b>${t[4]}</b></span><span>Projects: <b>${t[5]}</b></span></div></article>`).join("")}</div>
    </div></section>
    <section class="section section-dark"><div class="container">${sectionHead("Verified impact","Our Growing Impact","Quality-focused growth delivering tangible results for students.")}
      <div class="impact-grid">
        <article class="impact-card"><div class="impact-icon">👥</div><strong data-count="5800" data-suffix="K+" data-decimals="1">5.8K+</strong><span>Community Members</span><small>Growing</small></article>
        <article class="impact-card"><div class="impact-icon">🎓</div><strong data-count="4500" data-suffix="K+" data-decimals="1">4.5K+</strong><span>Interns Trained</span><small>Growing</small></article>
        <article class="impact-card"><div class="impact-icon">🧩</div><strong data-count="200" data-suffix="+">200+</strong><span>Projects Delivered</span><small>Growing</small></article>
        <article class="impact-card"><div class="impact-icon">💙</div><strong data-count="92" data-suffix="%">92%</strong><span>Satisfaction Rate</span><small>Growing</small></article>
        <article class="impact-card"><div class="impact-icon">✅</div><strong data-count="95" data-suffix="%">95%</strong><span>Completion Rate</span><small>Growing</small></article>
        <article class="impact-card"><div class="impact-icon">⭐</div><strong>4.8/5</strong><span>Average Rating</span><small>Trusted by learners</small></article>
        <article class="impact-card"><div class="impact-icon">📚</div><strong data-count="50" data-suffix="+">50+</strong><span>Learning Modules</span><small>Comprehensive</small></article>
        <article class="impact-card"><div class="impact-icon">📈</div><strong data-count="85" data-suffix="%">85%</strong><span>Active Engagement</span><small>Highly engaged</small></article>
      </div>
    </div></section>`);
}

function projects() {
  const projectData = [
    ["🎓","E-Learning Platform","In Progress","React, Node.js, MongoDB","Course delivery, progress tracking, quizzes, and educator dashboards."],
    ["🛒","E-Commerce Store","Completed","React, Express, Stripe","Product discovery, cart, checkout, user accounts, and order management."],
    ["✅","Task Dashboard","Completed","JavaScript, REST API","Intern task planning, submissions, reviews, and progress analytics."],
    ["💬","Social Network","Planning","React, Socket.io","Profiles, posts, real-time chat, notifications, and content feeds."]
  ];
  return shell(`${pageHero("Watch Projects Being Built Live","Explore realistic products, their development stages, and the technologies interns practice while building them.","Home")}
    <section class="section"><div class="container">${sectionHead("Live showcase","Projects Built in the Arena","Each project is broken into practical milestones so you learn how production applications come together.")}
      <div class="grid grid-4" style="margin: 18px 0 24px;">
        <article class="card metric"><div class="icon"></div><strong data-count="25450" data-suffix="+" data-live="true">0</strong><h3>Lines of Code</h3><p>Live Counter</p></article>
        <article class="card metric"><div class="icon">⏱</div><strong data-count="1240" data-live="true">0</strong><h3>Development Hours</h3><p>Live Counter</p></article>
        <article class="card metric"><div class="icon">🐞</div><strong data-count="156" data-live="true">0</strong><h3>Issues Fixed</h3><p>Live Counter</p></article>
        <article class="card metric"><div class="icon">👥</div><strong data-count="14" data-live="true">0</strong><h3>Active Interns</h3><p>Live Counter</p></article>
      </div>
      <div class="filters" data-filter-group="projects"><button class="filter active" data-filter="All">All Projects</button><button class="filter" data-filter="In Progress">In Progress</button><button class="filter" data-filter="Completed">Completed</button><button class="filter" data-filter="Planning">Planning</button></div>
      <div class="grid grid-2">${projectData.map(p => {
        const initialProgress = p[2] === "Completed" ? 100 : (p[2] === "Planning" ? Math.floor(Math.random() * 15 + 5) : Math.floor(Math.random() * 40 + 30));
        return `<article class="card project-card" data-status="${p[2]}" style="padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; display: flex; flex-direction: column; height: 100%; box-shadow: 0 4px 6px rgba(0,0,0,0.02); transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 20px rgba(0,0,0,0.05)'" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 16px;">
            <h3 style="margin: 0; font-size: 18px; color: #1e293b; font-weight: 700;">${p[1]}</h3>
            <span class="status ${p[2]==="Completed"?"":"blue"}" style="font-size: 12px; padding: 4px 10px; border-radius: 99px;">${p[2]}</span>
          </div>
          
          <p style="color: #64748b; font-size: 14px; line-height: 1.6; flex-grow: 1; margin: 0 0 20px 0;">${p[4]}</p>
          
          <div class="tags" style="margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 8px;">
            ${p[3].split(', ').map(tag => `<span style="font-size: 11px; font-weight: 600; color: #475569; background: #f1f5f9; border: 1px solid #e2e8f0; padding: 4px 10px; border-radius: 6px;">${tag}</span>`).join('')}
          </div>

          <div style="margin-bottom: 24px; background: #f8fafc; padding: 16px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 12px; font-weight: 600; color: #334155;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block; animation: pulse-green 2s infinite; box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);"></span>
                <span style="letter-spacing: 0.5px;">E-Project Progress</span>
              </div>
              <span class="live-progress-text" data-val="${initialProgress}" style="color: #2563eb; font-size: 14px;">${initialProgress}%</span>
            </div>
            <div style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 99px; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);">
              <div class="live-progress-fill" style="height: 100%; width: ${initialProgress}%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 99px; transition: width 1s ease, background 0.3s; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: shimmer 2s infinite;"></div>
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <div style="font-size: 12px; color: #64748b; font-weight: 500; display: flex; align-items: center; gap: 6px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #94a3b8;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span class="live-metric" data-base="${Math.floor(Math.random()*2000 + 500)}" style="color: #1e293b; font-weight: 700;">0</span> ${p[2]==="Completed" ? 'Total Commits' : 'Live Commits'}
            </div>
            <a href="#" data-demo="${p[1]}" style="font-size: 13px; font-weight: 600; color: #2563eb; text-decoration: none; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" onmouseover="this.style.color='#1d4ed8'" onmouseout="this.style.color='#2563eb'">
              View Details <span style="font-size: 16px;">→</span>
            </a>
          </div>
        </article>`;
      }).join("")}</div>
    </div></section>
    <section class="section section-soft"><div class="container">${sectionHead("From idea to deployment","Project Development Timeline","A transparent workflow that mirrors how professional product teams plan, build, test, and ship.")}
      <div class="timeline">${["Discovery & Requirements","UI/UX Planning","Frontend Development","Backend & Database","Testing & Review","Deployment & Documentation"].map((x,i)=>`<div class="timeline-item"><div class="timeline-number">${i+1}</div><div class="card"><h3>${x}</h3><p>${["Define users, goals, features, and acceptance criteria.","Turn requirements into flows, wireframes, and a reusable visual system.","Build responsive screens and interactive component states.","Design APIs, authentication, persistence, and business logic.","Verify behavior, accessibility, quality, and edge cases.","Ship the application and present the technical decisions."][i]}</p></div></div>`).join("")}</div>
    </div></section>`);
}

function student() {
  const journey = ["Apply for Internship","Choose Project & Domain","Get Dashboard Access","Complete Weekly Tasks","Review & Feedback","Certificate & ID Card","Career Support"];
  return shell(`<section class="page-hero"><div class="container"><div class="breadcrumb">Home / Your Path from Student to Professional</div><h1>Your Path from Student to Professional</h1><p>A guided, self-paced internship journey focused on practical work, visible progress, and career-ready outcomes.</p><div class="mini-stats" style="justify-content:center; margin-top:32px; gap:36px;"><div><strong>1,500+</strong><span>Students Trained</span></div><div><strong>95%</strong><span>Completion Rate</span></div><div><strong>85%</strong><span>Positive Feedback</span></div></div></div></section>
    <section class="section section-soft"><div class="container">${sectionHead("The complete journey","Your Internship Journey at The Developers Arena","Know exactly what happens from application to certification.")}
      <div class="timeline">${journey.map((x,i)=>`<div class="timeline-item"><div class="timeline-number">${i+1}</div><div class="card"><h3>${x}</h3><p>${["Pick a domain and tell us about your learning goals.","Select a project track aligned with your current skill level.","Receive tasks, learning resources, and progress visibility.","Build features and submit source code on a practical schedule.","Improve your work using structured review checkpoints.","Earn completion credentials after meeting requirements.","Access resume, portfolio, and interview preparation resources."][i]}</p></div></div>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container">${sectionHead("Hands-on by design","What You'll Actually Work On","The daily work is designed to resemble the responsibilities of an entry-level developer.")}
      <div class="grid grid-3">${["Build CRUD Operations","Implement Authentication","Work with Git & GitHub","Write Documentation","Weekly Task Submission","Fix Bugs & Improvements"].map((x,i)=>`<article class="card"><div class="icon">${["⚙","🔐","⌘","📝","📤","🐞"][i]}</div><h3>${x}</h3><p>Practice this skill inside a complete project, with clear requirements and a measurable outcome.</p></article>`).join("")}</div>
    </div></section>
    <section class="section section-dark"><div class="container"><div class="section-head"><span class="kicker">Who Can Join</span><h2>Who Can Join This Internship?</h2><p>Designed for students at every level — no experience needed to start.</p></div>
      <div class="grid grid-3">
        <article class="card card-dark"><div class="icon">🎓</div><h3>Absolute Beginners</h3><p>College students with basic programming knowledge.</p><ul class="micro-list"><li>Just started learning to code</li><li>Know basics of any language</li><li>Need structured guidance</li></ul><p style="margin-top:18px; font-size:13px; color:#cbd5e1; font-weight:700;">Suitable For: B.Tech, BCA, BSc CS students</p></article>
        <article class="card card-dark"><div class="icon">👨‍🎓</div><h3>Recent Graduates</h3><p>Completed your degree and ready to build real-world experience.</p><ul class="micro-list"><li>Degree in CS/IT completed</li><li>Looking for first job</li><li>Need portfolio projects</li></ul><p style="margin-top:18px; font-size:13px; color:#cbd5e1; font-weight:700;">Suitable For: 2022-2024 graduates</p></article>
        <article class="card card-dark"><div class="icon">🔁</div><h3>Career Switchers</h3><p>Transitioning from another field into technology.</p><ul class="micro-list"><li>Basic tech knowledge</li><li>Self-learned some skills</li><li>Need industry experience</li></ul><p style="margin-top:18px; font-size:13px; color:#cbd5e1; font-weight:700;">Suitable For: Non-CS graduates, career changers</p></article>
      </div>
    </div></section>
    <section class="section"><div class="container"><div class="section-head"><span class="kicker">Internship Plan Facilities</span><h2>Our Internship Plan Facilities</h2><p>Review the facilities included with each internship plan.</p></div><div class="grid grid-2" style="max-width: 900px; margin: 0 auto;">${idPlans.map((p,i)=>`<article class="card pricing-card ${i===0?"featured":""}">${i===0?'<span class="popular">MOST POPULAR</span>':""}<span class="kicker">${p.name}</span><div class="price">₹${p.price} <small>one time</small></div><ul class="checklist">${p.features.map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("")}</div></div></section>
    <section class="section section-dark"><div class="container"><div class="section-head"><span class="kicker">Transparent Policy</span><h2>⚠️ Important Clarification</h2><p>We believe in honesty — here's what you won't get.</p></div><div class="clarification-cards">
        <article class="clarification-card"><div class="clarification-icon">⛔</div><h3>No Fake Job Guarantee</h3><p>We don't promise jobs. We provide skills and support, but job success depends on your efforts.</p></article>
        <article class="clarification-card"><div class="clarification-icon">✳️</div><h3>No Instant Certificate</h3><p>Certificates are earned only after completing all tasks. No shortcuts, no empty credentials.</p></article>
        <article class="clarification-card"><div class="clarification-icon">📋</div><h3>No Copied Projects</h3><p>You must write your own code. Plagiarism is strictly prohibited and will lead to termination.</p></article>
        <article class="clarification-card"><div class="clarification-icon">⚡</div><h3>Skills Over Completion</h3><p>We focus on skill development. Completing tasks without learning is pointless.</p></article>
      </div>
      <div class="clarification-note">
        <p><strong>Why this matters:</strong> We're building real developers, not distributing certificates. Your growth is our priority.</p>
      </div>
    </div></section>`);
}

function taskPage() {
  const authenticatedEmail = sessionStorage.getItem("tda-task-email");
  const enrollments = JSON.parse(localStorage.getItem("tda-enrollments") || "[]");
  const legacyApplication = JSON.parse(localStorage.getItem("tda-application") || "null");
  const allEnrollments = legacyApplication && !enrollments.some(x => x.applicationId === legacyApplication.applicationId)
    ? [...enrollments, legacyApplication]
    : enrollments;
  const application = allEnrollments.find(x => x.email?.toLowerCase() === authenticatedEmail?.toLowerCase());

  if (!application || application.paid === false) {
    return shell(`${pageHero("Intern Task Login","Enter the email address used during internship enrollment to access your course tasks.")}
      <section class="section section-soft"><div class="container"><div class="access-gate card">
        <div class="gate-icon">@</div><span class="kicker">Enrolled interns only</span><h2>Access Your Subject Tasks</h2>
        <p>We will match your email with your internship enrollment and automatically load tasks for your selected course.</p>
        <form id="task-login-form" class="task-login-form">
          <div class="field"><label for="task-email">Enrollment email address</label><input id="task-email" name="email" type="email" required placeholder="you@example.com" autocomplete="email"></div>
          <p class="login-error" id="task-login-error"></p>
          <button class="btn btn-primary btn-wide" type="submit">Access Intern Tasks →</button>
        </form>
        <div class="not-enrolled">Not enrolled yet? <a class="route-link" href="/apply">Apply for an internship</a></div>
      </div></div></section>`);
  }

  const repoSubmission = getRepoSubmissionForEmail(application.email);
  const baseTasks = taskCatalog[application.program] || taskCatalog["Web Development"];
  const duration = parseInt(application.duration) || 6;
  let tasks = baseTasks.map((t, i) => [t[0], t[1], `Month ${i+1}`]);

  const idNumber = Math.floor(Math.random() * 89999 + 10000);
  return shell(`<div class="task-shell"><aside class="task-sidebar"><h3>Intern Workspace</h3>
      
      <div style="background: linear-gradient(135deg, #1e293b, #0f172a); border-radius: 16px; padding: 24px; color: white; margin: 20px 0 28px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); position: relative; overflow: hidden; border: 1px solid #334155;">
        <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -30px; left: -20px; width: 80px; height: 80px; background: rgba(56, 189, 248, 0.1); border-radius: 50%;"></div>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; position: relative; z-index: 1;">
          <strong style="font-size: 11px; letter-spacing: 1px; color: #94a3b8; text-transform: uppercase;">Intern ID Card</strong>
          <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.3);">VERIFIED</span>
        </div>
        
        <div style="display: flex; align-items: center; gap: 16px; position: relative; z-index: 1;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: #334155; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; border: 2px solid #38bdf8; color: #f8fafc; box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);">
            ${(application.name || "I").charAt(0).toUpperCase()}
          </div>
          <div>
            <div style="font-weight: 600; font-size: 17px; margin-bottom: 4px; color: white;">${application.name || "Intern"}</div>
            <div style="font-size: 12px; color: #cbd5e1;">${application.program}</div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 6px; font-family: 'Courier New', monospace; letter-spacing: 0.5px;">ID: TDA-${idNumber}</div>
          </div>
        </div>

        <div style="position: relative; z-index: 1; margin-top: 20px; padding-top: 16px; border-top: 1px dashed #334155; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 11px; color: #64748b;">Duration: ${duration} Month${duration>1?'s':''}</div>
            <a href="#" id="download-id-btn" style="color: #38bdf8; font-size: 12px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 4px; transition: color 0.2s;" onmouseover="this.style.color='#7dd3fc'" onmouseout="this.style.color='#38bdf8'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Save
            </a>
        </div>
      </div>

      <div style="margin-top:28px"><p>Overall progress</p><div class="bar"><span id="side-progress" style="width:0%"></span></div><p id="side-progress-label">0% complete</p></div>
    </aside>
    <section class="task-main"><div class="row-between"><div>${sectionHead(application.program,"Your Subject Tasks",`These assignments are for your enrolled ${application.program} internship. Progress is saved in this browser.`,true)}</div><button class="btn btn-outline" id="task-logout">Use Another Email</button></div>
      
      <div class="documents-section" style="margin-bottom: 40px; padding-bottom: 40px; border-bottom: 1px dashed #cbd5e1;">
        <h3 style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 16px;">My Documents</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
          <a href="#" id="download-letter" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: white; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor='#cbd5e1'; this.style.boxShadow='0 10px 15px rgba(0,0,0,0.05)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; this.style.transform='none'">
            <div style="font-size: 36px; margin-bottom: 12px;">📄</div>
            <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Offer Letter</div>
            <span style="font-size:13px; font-weight: 600; background:#10b981; color:white; padding:8px 20px; border-radius:8px; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2); width: 100%; text-align: center;">Download</span>
          </a>
          <a href="#" id="download-cert" class="paid-doc-link" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: white; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor='#cbd5e1'; this.style.boxShadow='0 10px 15px rgba(0,0,0,0.05)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; this.style.transform='none'" data-unlocked="false" data-doc="Completion Certificate">
            <div style="font-size: 36px; margin-bottom: 12px;">🎓</div>
            <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Completion Certificate</div>
            <span style="font-size:13px; font-weight: 600; background:#f1f5f9; color:#64748b; padding:8px 20px; border-radius:8px; width: 100%; text-align: center;">Locked</span>
          </a>
          <a href="#" id="download-att-cert" class="paid-doc-link" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: white; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor='#cbd5e1'; this.style.boxShadow='0 10px 15px rgba(0,0,0,0.05)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; this.style.transform='none'" data-unlocked="false" data-doc="Attendance Certificate">
            <div style="font-size: 36px; margin-bottom: 12px;">📅</div>
            <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Attendance Certificate</div>
            <span style="font-size:13px; font-weight: 600; background:#f1f5f9; color:#64748b; padding:8px 20px; border-radius:8px; width: 100%; text-align: center;">Locked</span>
          </a>
          <a href="#" id="download-exp-letter" class="paid-doc-link" style="text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: white; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.02);" onmouseover="this.style.borderColor='#cbd5e1'; this.style.boxShadow='0 10px 15px rgba(0,0,0,0.05)'; this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)'; this.style.transform='none'" data-unlocked="false" data-doc="Experience Letter">
            <div style="font-size: 36px; margin-bottom: 12px;">💼</div>
            <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Experience Letter</div>
            <span style="font-size:13px; font-weight: 600; background:#f1f5f9; color:#64748b; padding:8px 20px; border-radius:8px; width: 100%; text-align: center;">Locked</span>
          </a>
        </div>
      </div>

      <div class="grid grid-3" style="margin-bottom:28px"><div class="card metric"><strong id="tasks-done">0</strong><span>Completed</span></div><div class="card metric"><strong>${tasks.length}</strong><span>Total Tasks</span></div><div class="card metric"><strong id="task-percent">0%</strong><span>Progress</span></div></div>
      <div class="subject-banner"><span>Active subject</span><strong>${application.program}</strong><small>${internships.find(x=>x[0]===application.program)?.[1] || "Internship task track"}</small></div>
      <div class="task-list">${tasks.map((t,i)=>`
        <div class="task-item card" style="display: flex; flex-direction: column; align-items: stretch; margin-bottom: 16px; padding: 20px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; width: 100%;">
            <span><h4 style="margin:0 0 4px; font-size:16px;">${i+1}. ${t[0]}</h4><p style="margin:0; font-size:14px; color:#475569;">${t[1]}</p></span>
            <span class="tag" style="color:#526078;background:#edf1f8">${t[2]}</span>
          </div>
          <div id="task-submission-${i}" style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #e2e8f0; display: flex; justify-content: flex-end; align-items: center; gap: 12px;">
            <span style="flex:1; color:#64748b; font-size:13px;">Click submit to share your repo and documentation.</span>
            <button class="btn btn-primary btn-sm submit-task-btn" data-task="${i}">Submit Task</button>
          </div>
          <div id="task-status-${i}" style="display: none; margin-top: 16px; padding-top: 16px; border-top: 1px dashed #e2e8f0; gap: 10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
              <span style="color: #10b981; font-size: 14px; font-weight: 500; display:flex; align-items:center; gap:6px;">✅ Submission received</span>
              <button class="btn btn-outline btn-sm undo-task-btn" data-task="${i}" style="padding: 4px 12px; font-size: 12px;">Remove Submission</button>
            </div>
            <div id="task-links-${i}" style="font-size: 13px; color: #475569; line-height: 1.6;"></div>
          </div>
        </div>
      `).join("")}</div>
      
    </section></div>`, false);
}

function career() {
  const resources = [["Resume Tips for Freshers","How to write a developer resume with no experience","10 min read"],["Developer Interview Preparation","Common questions and how to answer them","15 min read"],["Build Your GitHub Profile","Make your GitHub attractive to employers","12 min read"],["Demo Project Ideas","Small projects to build and showcase","8 min read"],["Job Search Strategy","Where and how to find entry-level positions","20 min read"],["Tech Networking Guide","Connect with developers and recruiters","18 min read"]];
  return shell(`${pageHero("Career Readiness at The Developers Arena","Our promise is practical skill building—not false job guarantees. Prepare to compete with stronger projects, clearer communication, and confidence.")}
    <section class="section"><div class="container">${sectionHead("Realistic outcomes","What Can You Do After Completing This Internship?","Use your new experience to pursue opportunities that match your skills and readiness.")}
      <div class="grid grid-3">${["Apply for Entry-Level Developer Roles","Join Startup Internships","Freelance Junior Developer","Enhance College Projects","Confident Interview Performance","Build a Strong Portfolio"].map((x,i)=>`<article class="card"><div class="icon">${["💼","🚀","🧑‍💻","🎓","🎤","📁"][i]}</div><h3>${x}</h3><p>Translate practical project experience into a clearer, more credible career story.</p></article>`).join("")}</div>
    </div></section>
    <section class="section section-soft"><div class="container">${sectionHead("Free learning library","Career Resources for Students","Short, practical resources for the moments between learning and landing an opportunity.")}
      <div class="grid grid-3">${resources.map((r,i)=>`<button class="card resource-card" style="text-align:left"><div class="icon">${["📄","🎤","⌘","💡","🔎","👥"][i]}</div><h3>${r[0]}</h3><p>${r[1]}</p><span class="card-link">${r[2]} · Open guide →</span></button>`).join("")}</div>
    </div></section>
    <section class="section section-dark"><div class="container">${sectionHead("Preparation that transfers","Skills You Will Build & Master","Strengthen technical execution, professional habits, portfolio presentation, and interview communication.")}
      <div class="grid grid-4">${["Technical Skills","Professional Skills","Portfolio & Resume","Interview Preparation"].map((x,i)=>`<div class="card"><div class="icon">${["</>","🤝","📄","🎯"][i]}</div><h3>${x}</h3><p>Structured exercises help you explain what you built, why it matters, and how you solved problems.</p></div>`).join("")}</div>
    </div></section>`);
}

function applyPage() {
  const categories = [
    { title: "Technology & Coding", items: ["Full Stack Java", "Java Internship", "Web Development", "Python Internship", "Data Science"] },
    { title: "Business & Management", items: ["HR Internship", "Business Development", "Digital Marketing"] },
    { title: "Creative & Content", items: ["Content Writing", "Graphic Design", "Video Editing"] }
  ];
  
  const now = new Date();
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const displayMonth = now.getDate() > 11 ? monthNames[(now.getMonth() + 1) % 12] : monthNames[now.getMonth()];
  const batchText = `Next internship batch starts on the 11th of ${displayMonth}. Choose a track and join the batch that fits your schedule.`;

  let html = `${pageHero("Select Your Internship","Choose a track that matches your goals. You will be redirected to complete your application.")}<section class="section section-soft"><div class="container"><div class="batch-note"><p>${batchText}</p></div><div class="eligibility-note"><p>Designed for MCA, BCA, BSc, BTech, and all IT students. Course references and resources are from thedevelopersarena.com.</p></div>`;
  
  categories.forEach(cat => {
    const groupInternships = internships.filter(i => cat.items.includes(i[0]));
    if (groupInternships.length > 0) {
      html += `<h2 style="margin: 40px 0 20px; font-size: 24px; font-weight: 700; color: var(--navy); border-bottom: 2px solid var(--line); padding-bottom: 10px;">${cat.title}</h2>`;
      html += `<div id="internship-picker" class="grid grid-3" style="margin-bottom: 20px;">${groupInternships.map(x=>`<div class="card internship-option" data-internship="${x[0]}"><div><div class="icon">${x[2]}</div><h3>${x[0]}</h3><p>${x[1]}</p><p class="degree-label">Suitable for: ${internshipDegrees[x[0]] || "MCA, BCA, BSc, BTech"}</p><span class="batch-pill">Batch starts: 11th ${displayMonth}</span></div><div class="apply-action"><button class="btn btn-primary btn-sm" type="button">Apply Now</button></div></div>`).join("")}</div>`;
    }
  });
  
  html += `</div></section>`;
  return shell(html);
}

function applyFormPage() {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSesl_CabgJULAdxQVjqWSPxmuR3e_FL8-s3hWSQJWjXOrB5ig/viewform?usp=dialog';
  return `
    <style>
      .apply-wrapper { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 40px 20px; font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: center; }
      .apply-card { background: white; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 600px; width: 100%; padding: 60px 40px; text-align: center; }
      .apply-header { margin-bottom: 30px; }
      .apply-header h1 { margin: 0 0 12px; font-size: 32px; font-weight: 700; color: #1e293b; }
      .apply-header p { margin: 0; font-size: 16px; color: #64748b; line-height: 1.6; }
      .info-box { background: #f0f4ff; border-left: 4px solid #667eea; padding: 20px; border-radius: 6px; margin: 30px 0; text-align: left; }
      .info-box h3 { margin: 0 0 12px; color: #667eea; font-size: 16px; }
      .info-box p { margin: 8px 0; color: #334155; font-size: 14px; line-height: 1.6; }
      .submit-btn { display: inline-block; padding: 16px 40px; background: #667eea; color: white; text-decoration: none; border: none; border-radius: 6px; font-size: 18px; font-weight: 600; cursor: pointer; transition: background 0.2s; margin-top: 20px; }
      .submit-btn:hover { background: #764ba2; }
      .loading { color: #64748b; font-size: 14px; margin-top: 20px; }
    </style>

    <div class="apply-wrapper">
      <div class="apply-card">
        <div class="apply-header">
          <h1>🎓 Join The Developers Arena</h1>
          <p>We've moved our registration to a streamlined form. Click below to start your internship application.</p>
        </div>

        <div class="info-box">
          <h3>What happens next?</h3>
          <p>✓ Fill out your details in the registration form</p>
          <p>✓ We'll review your application in 3-4 hours</p>
          <p>✓ Receive an email with payment instructions</p>
          <p>✓ Complete your payment and access the dashboard</p>
        </div>

        <a href="${googleFormUrl}" target="_blank" class="submit-btn">Start Your Application →</a>
        <div class="loading">Redirecting to form in 3 seconds...</div>

        <script>
          setTimeout(() => {
            window.location.href = "${googleFormUrl}";
          }, 3000);
        </script>
      </div>
    </div>
  `;
}

function pricing() {
  const faqs = [["Is the certificate verified and recognized?","Certificates include a unique verification ID and record the domain, project work, and completion status."],["What if I cannot complete the tasks on time?","The program is self-paced. You can continue from your saved progress and request guidance when you are stuck."],["Can I upgrade from Standard to Premium later?","Yes. Your progress stays intact and the upgraded resources become available after confirmation."],["What kind of support do I get?","Support varies by plan, from email guidance to priority review and career preparation resources."]];
  return shell(`${pageHero("Simple & Student-Friendly Internship Plans","Choose the level of credentials, resources, and support that fits your goals. No hidden recurring subscription.")}
    <section class="section"><div class="container"><div class="grid grid-2" style="max-width: 800px; margin: 0 auto;">${idPlans.map((p,i)=>`<article class="card pricing-card ${i===0?"featured":""}">${i===0?'<span class="popular">MOST POPULAR</span>':""}<span class="kicker">${p.name}</span><div class="price">₹${p.price} <small>one time</small></div><ul class="checklist">${p.features.map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn ${i===0?"btn-primary":"btn-outline"} btn-wide plan-link route-link" data-plan="${p.name}" href="/payment?plan=${encodeURIComponent(p.name)}">Apply Now</a></article>`).join("")}</div></div></section>
    <section class="section section-soft"><div class="container">${sectionHead("Three easy steps","How It Works","Choose a plan, complete the application, and begin your internship dashboard journey.")}
      <div class="grid grid-3">${["Choose Your Plan","Complete Application","Start Building"].map((x,i)=>`<div class="card metric"><strong>0${i+1}</strong><h3>${x}</h3><p>${["Select the credential and support level you need.","Share your program, contact, and learning details.","Access tasks, projects, and progress tracking."][i]}</p></div>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container">${sectionHead("Common questions","Frequently Asked Questions","Clear answers before you begin.")}
      <div class="accordion">${faqs.map(x=>`<div class="faq"><button type="button">${x[0]}<span>+</span></button><div class="faq-answer">${x[1]}</div></div>`).join("")}</div>
    </div></section>`);
}

function paymentPage() {
  const params = new URLSearchParams(window.location.search);
  const appId = params.get('appId');

  return `
    <style>
      .payment-wrapper { min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; padding: 20px; font-family: 'Inter', sans-serif; }
      .payment-card { background: white; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 500px; width: 100%; padding: 40px; }
      .payment-header { text-align: center; margin-bottom: 30px; }
      .payment-header h1 { margin: 0 0 8px; font-size: 28px; color: #1e293b; }
      .payment-header p { margin: 0; color: #64748b; font-size: 14px; }
      .payment-details { background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; }
      .detail-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
      .detail-row strong { color: #1e293b; }
      .detail-row span { color: #64748b; }
      .price-highlight { font-size: 32px; font-weight: 700; color: #667eea; text-align: center; margin: 20px 0; }
      .btn-pay { width: 100%; padding: 14px; background: #667eea; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
      .btn-pay:hover { background: #764ba2; }
      .loading { text-align: center; }
      .spinner { border: 3px solid #f0f0f0; border-top: 3px solid #667eea; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 20px auto; }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .error-msg { background: #fee2e2; color: #dc2626; padding: 12px; border-radius: 6px; margin-bottom: 16px; font-size: 14px; }
    </style>
    
    <div class="payment-wrapper">
      <div class="payment-card" id="payment-container">
        <div class="payment-header">
          <h1>Complete Payment</h1>
          <p>Secure ID Card Payment</p>
        </div>
        
        <div id="payment-content">
          <div class="loading">
            <div class="spinner"></div>
            <p>Loading payment details...</p>
          </div>
        </div>
      </div>
    </div>

    <script>
      async function loadPaymentPage() {
        try {
          if (!${appId ? 'true' : 'false'}) {
            document.getElementById('payment-content').innerHTML = '<div class="error-msg">❌ Invalid application ID. Please try again.</div>';
            return;
          }

          const response = await fetch('/api/application/${appId}');
          const data = await response.json();

          if (!data.ok) {
            document.getElementById('payment-content').innerHTML = '<div class="error-msg">❌ Application not found. Please submit the form again.</div>';
            return;
          }

          const app = data.application;
          const amount = Math.round(app.paymentAmount / 100);

          document.getElementById('payment-content').innerHTML = \`
            <div class="payment-details">
              <div class="detail-row">
                <strong>Name:</strong>
                <span>\${app.name}</span>
              </div>
              <div class="detail-row">
                <strong>Email:</strong>
                <span>\${app.email}</span>
              </div>
              <div class="detail-row">
                <strong>Internship:</strong>
                <span>\${app.internship}</span>
              </div>
              <div class="detail-row">
                <strong>ID Plan:</strong>
                <span>\${app.idPlan}</span>
              </div>
            </div>

            <div class="price-highlight">₹\${amount}</div>

            <button class="btn-pay" id="pay-btn">Pay Now with Razorpay</button>
            <p style="text-align: center; margin-top: 16px; color: #64748b; font-size: 12px;">Secure payment powered by Razorpay</p>
          \`;

          document.getElementById('pay-btn').addEventListener('click', () => initializePayment(app));
        } catch (error) {
          console.error('Error:', error);
          document.getElementById('payment-content').innerHTML = '<div class="error-msg">❌ Error loading payment. Please try again.</div>';
        }
      }

      async function initializePayment(app) {
        try {
          const createOrderRes = await fetch('/api/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ applicationId: app.applicationId })
          });

          const orderData = await createOrderRes.json();
          if (!orderData.ok) throw new Error(orderData.error);

          const options = {
            key: orderData.keyId,
            amount: orderData.amount,
            currency: orderData.currency,
            name: 'The Developers Arena',
            description: \`\${app.idPlan} - \${app.internship}\`,
            order_id: orderData.orderId,
            prefill: {
              name: app.name,
              email: app.email,
              contact: app.phone
            },
            handler: async (response) => {
              await verifyPayment(response, app.applicationId);
            },
            modal: {
              ondismiss: () => {
                alert('Payment cancelled. Please try again.');
              }
            }
          };

          const rzp = new Razorpay(options);
          rzp.open();
        } catch (error) {
          alert('Error creating payment: ' + error.message);
        }
      }

      async function verifyPayment(response, applicationId) {
        try {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          const result = await verifyRes.json();
          if (result.ok) {
            document.getElementById('payment-content').innerHTML = \`
              <div style="text-align: center;">
                <div style="font-size: 60px; margin: 20px 0;">✅</div>
                <h2 style="color: #059669; margin-bottom: 8px;">Payment Successful!</h2>
                <p style="color: #64748b; margin-bottom: 24px;">Your Digital ID Card is now active. Check your email for details.</p>
                <a href="/" class="btn-pay" style="text-decoration: none; display: inline-block;">Back to Home</a>
              </div>
            \`;
          } else {
            throw new Error(result.error);
          }
        } catch (error) {
          alert('Payment verification failed: ' + error.message);
        }
      }

      loadPaymentPage();
    </script>

    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  `;
}

function idCardSelectionPage() {
  // Read from URL parameters (from email link) or localStorage
  const params = new URLSearchParams(window.location.search);
  const urlEmail = params.get('email');
  const urlName = params.get('name');
  const urlProgram = params.get('program');
  const urlPlan = params.get('plan');
  
  const application = JSON.parse(localStorage.getItem("tda-application") || "null");
  const userName = urlName || application?.name || "Intern";
  const userProgram = urlProgram || application?.program || "Internship";
  const userEmail = urlEmail || application?.email || "";
  const userDuration = application?.duration || "1 Month";
  const userInitial = userName.charAt(0).toUpperCase();
  const idNumber = `TDA-${Date.now().toString().slice(-7)}`;

  return shell(`
    ${pageHero("Select Your ID Card", "Choose the ID card plan that fits your internship goals. Your card unlocks dashboard access, tasks, and certificates.")}
    <section class="section section-soft">
      <div class="container">
        <!-- Step Indicator -->
        <div class="step-indicator">
          <div class="step-dot completed">
            <div class="dot">✓</div>
            <span class="step-label">Apply</span>
          </div>
          <div class="step-connector done"></div>
          <div class="step-dot active">
            <div class="dot">2</div>
            <span class="step-label">ID Card</span>
          </div>
          <div class="step-connector"></div>
          <div class="step-dot">
            <div class="dot">3</div>
            <span class="step-label">Dashboard</span>
          </div>
        </div>

        <!-- Application Summary -->
        <div class="app-summary">
          <div class="app-avatar">${userInitial}</div>
          <div class="app-info">
            <h3>${userName}</h3>
            <p>${userProgram} · ${userDuration}</p>
          </div>
          <div class="app-check">✅</div>
        </div>

        <!-- ID Card Preview -->
        <div class="id-card-preview-wrap">
          <div class="id-card-preview">
            <div class="preview-header">
              <small>Intern ID Card</small>
              <span class="preview-verified">PREVIEW</span>
            </div>
            <div class="preview-body">
              <div class="preview-avatar">${userInitial}</div>
              <div>
                <div class="preview-name">${userName}</div>
                <div class="preview-course">${userProgram}</div>
              </div>
            </div>
            <div class="preview-footer">
              <span>ID: ${idNumber}</span>
              <span class="preview-plan-tag" id="preview-plan-label">Select a Plan</span>
            </div>
          </div>
        </div>

        <!-- Plan Selection -->
        ${sectionHead("Choose your plan", "Select Your ID Card Type", "Both plans include dashboard access and task tracking. Premium adds career resources and priority support.")}
        <div class="id-plan-grid">
          ${idPlans.map((plan, i) => `
            <button class="id-plan-card" data-plan-index="${i}" data-plan-name="${plan.name}" data-plan-price="${plan.price}">
              <div class="plan-radio"></div>
              ${i === 0 ? '<span class="plan-badge">Most Popular</span>' : ''}
              <span class="kicker">${plan.name}</span>
              <div class="plan-price">₹${plan.price} <small>one time</small></div>
              <ul class="plan-features">
                ${plan.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </button>
          `).join('')}
        </div>

        <!-- Continue Button -->
        <div style="text-align: center; margin-top: 10px;">
          <button class="btn btn-primary btn-wide" id="continue-to-payment" style="max-width: 420px; padding: 16px 28px; font-size: 16px;" disabled>
            Continue to Payment →
          </button>
          <p style="margin-top: 14px; color: var(--muted); font-size: 13px;">Select an ID card plan above to proceed</p>
        </div>
      </div>
    </section>
  `);
}


function about() {
  return shell(`${pageHero("Learn at Your Own Pace, Build at Your Own Speed","A flexible learning environment for people balancing college, work, family, and the wonderfully chaotic business of being human.")}
    <section class="section"><div class="container">${sectionHead("Flexible by design","Why Self-Paced Works Better","Move quickly through familiar concepts and spend more time where the challenge is real.")}
      <div class="grid grid-3">${["Flexible Schedule","Personalized Learning","Lifetime Resource Access"].map((x,i)=>`<article class="card"><div class="icon">${["🕒","🧭","∞"][i]}</div><h3>${x}</h3><p>${["Fit learning around your existing responsibilities without sacrificing consistency.","Choose a domain, project, and pace that reflect your experience and goals.","Return to project guides and career resources whenever you need a refresher."][i]}</p></article>`).join("")}</div>
    </div></section>
    <section class="section section-dark"><div class="container">${sectionHead("What makes us different","What Makes Our Program Special","A practical system that combines independence with structure.")}
      <div class="grid grid-3">${["Learn at Your Pace","Real-World Projects","Community Support"].map((x,i)=>`<article class="card"><div class="icon">${["⚡","💻","👥"][i]}</div><h3>${x}</h3><p>Build visible evidence of your skills while following clear milestones and learning alongside other developers.</p></article>`).join("")}</div>
    </div></section>
    <section class="section section-soft"><div class="container">${sectionHead("Your path","Your Self-Paced Journey","A simple sequence that keeps momentum visible.")}
      <div class="timeline">${["Enroll & Get Access","Learn at Your Speed","Build Projects","Get Certified & Job Ready"].map((x,i)=>`<div class="timeline-item"><div class="timeline-number">${i+1}</div><div class="card"><h3>${x}</h3><p>Complete this milestone on your schedule, then move forward with your progress and work safely saved.</p></div></div>`).join("")}</div>
    </div></section>`);
}

function contact() {
  return shell(`${pageHero("Contact Us","Questions about internship programs, status, certificates, or collaboration? Send a message and the team can follow up.")}
    <section class="section"><div class="container"><div class="grid grid-2">
      <div>${sectionHead("Let's talk","Reach The Developers Arena","Use the form or the contact details below. This local recreation keeps form submissions in your browser.",true)}
        <div class="card"><h3>Contact Person</h3><p>Program Support Team</p><h3 style="margin-top:24px">Email Address</h3><p>support@thedevelopersarena.com</p><h3 style="margin-top:24px">Community</h3><p>Join our Microsoft Teams learning community.</p></div>
      </div>
      <form class="card" id="contact-form"><div class="form-grid"><div class="field"><label>Name *</label><input name="name" required placeholder="Your name"></div><div class="field"><label>Email *</label><input name="email" type="email" required placeholder="you@example.com"></div><div class="field full"><label>Subject *</label><input name="subject" required placeholder="How can we help?"></div><div class="field full"><label>Message *</label><textarea name="message" required placeholder="Write your message"></textarea></div><div class="field full"><button class="btn btn-primary btn-wide">Send Message</button></div></div></form>
    </div></div></section>`);
}

function statusPage() {
  return shell(`${pageHero("🎓 Internship Status Checker","Follow a short guided check to understand the current stage of your internship application.")}
    <section class="section section-soft"><div class="container"><div class="form-shell" id="status-wizard">
      <div class="status-step active" data-step="1"><span class="kicker">Step 1 of 3</span><h2>Offer Letter Confirmation</h2><p>Have you received your internship offer letter?</p><div class="choice-grid"><button class="choice" data-next="2"><b>✅ Yes, I Received It</b><p>Continue to check onboarding status.</p></button><button class="choice" data-result="pending"><b>⏳ Not Yet Received</b><p>View expected next steps.</p></button></div></div>
      <div class="status-step" data-step="2"><span class="kicker">Step 2 of 3</span><h2>Identity Setup</h2><p>Have you received your intern ID or dashboard access?</p><div class="choice-grid"><button class="choice" data-next="3"><b>✅ Dashboard is Active</b><p>Continue to verify task progress.</p></button><button class="choice" data-result="onboarding"><b>🪪 Waiting for Access</b><p>View onboarding guidance.</p></button></div></div>
      <div class="status-step" data-step="3"><span class="kicker">Step 3 of 3</span><h2>Task Progress</h2><p>Have you started completing internship tasks?</p><div class="choice-grid"><button class="choice" data-result="active"><b>🚀 Yes, I Started</b><p>Your internship is active.</p></button><button class="choice" data-result="ready"><b>📋 Not Yet</b><p>You are ready to start.</p></button></div></div>
      <div class="status-step" data-step="result"><div id="status-result"></div><button class="btn btn-outline btn-wide" id="restart-status">Check Again</button></div>
    </div></div></section>`);
}

function repoSubmission() {
  return shell(`${pageHero("GitHub Repo Submission","Submit your GitHub repo link and run automated evaluations for test and lint checks.")}
    <section class="section section-soft"><div class="container">
      <div class="form-shell">
        <form id="repo-submit-form">
          <div class="field full"><label>Repository URL *</label><input name="repoUrl" type="url" required placeholder="https://github.com/username/repo"></div>
          <div class="field full"><label>Intern Email (optional)</label><input name="studentEmail" type="email" placeholder="you@example.com"></div>
          <div class="field full"><button class="btn btn-primary btn-wide">Run Evaluation</button></div>
        </form>
        <div id="repo-submit-status" class="repo-status" style="margin-top:24px; white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;"></div>
      </div>
    </div></section>`);
}

function initRepoSubmission() {
  const form = document.getElementById("repo-submit-form");
  const statusElement = document.getElementById("repo-submit-status");
  if (!form || !statusElement) return;
  const authenticatedEmail = sessionStorage.getItem("tda-task-email");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    statusElement.textContent = "Running repository evaluation...\nThis may take up to 2 minutes.";
    const data = new FormData(form);
    const repoUrl = String(data.get("repoUrl") || "").trim();
    const studentEmail = String(data.get("studentEmail") || "").trim().toLowerCase();
    const linkedEmail = authenticatedEmail || studentEmail || null;
    try {
      const response = await fetch("/api/repo-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });
      let result;
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        statusElement.textContent = `Submission failed: expected JSON, got ${response.status} ${response.statusText}\n${text}`;
        return;
      }
      if (!response.ok || !result.ok) {
        statusElement.textContent = `Error: ${result.error || response.statusText}`;
        return;
      }
      const submission = {
        email: linkedEmail,
        repoUrl,
        passed: result.passed,
        status: result.steps || [],
        submittedAt: new Date().toISOString(),
      };
      saveRepoSubmission(submission);
      const output = [`Result: ${result.passed ? "PASS" : "FAIL"}`];
      if (result.steps && Array.isArray(result.steps)) {
        result.steps.forEach(step => {
          output.push(`\n${step.name.toUpperCase()}: ${step.status.toUpperCase()}`);
          if (step.output) output.push(step.output.trim());
        });
      }
      if (!linkedEmail) {
        output.push("\nNote: Provide your internship email to link this submission to your dashboard.");
      }
      statusElement.textContent = output.join("\n");
    } catch (err) {
      statusElement.textContent = `Submission failed: ${err.message || err}`;
    }
  });
}

const renderers = {"/":home,"/projects":projects,"/student":student,"/task":taskPage,"/repo-submission":repoSubmission,"/career":career,"/apply":applyPage,"/apply-form":applyFormPage,"/pricing":pricing,"/about":about,"/contact":contact,"/Internship-status":statusPage,"/payment":paymentPage,"/id-card-selection":idCardSelectionPage};

function render() {
  const path = renderers[location.pathname] ? location.pathname : "/";
  document.getElementById("app").innerHTML = renderers[path]();
  bindGlobal();
  if (path === "/") initHome();
  if (path === "/projects") initProjects();
  if (path === "/student") initStudent();
  if (path === "/task") initTasks();
  if (path === "/career") initCareer();
  if (path === "/apply") initApply();
  if (path === "/apply-form") initApplyForm();
  if (path === "/pricing") initFaq();
  if (path === "/payment") initPayment();
  if (path === "/contact") initContact();
  if (path === "/Internship-status") initStatus();
  if (path === "/repo-submission") initRepoSubmission();
  if (path === "/id-card-selection") initIdCardSelection();
  window.scrollTo({top:0,behavior:"instant"});
}

function bindGlobal() {
  document.querySelectorAll(".route-link").forEach(link => link.addEventListener("click", event => {
    const url = new URL(link.href, location.origin);
    if (url.origin === location.origin && routes.includes(url.pathname)) {
      event.preventDefault();
      if (link.dataset.plan) localStorage.setItem("tda-selected-plan", link.dataset.plan);
      history.pushState({}, "", url.pathname + url.search);
      render();
    }
  }));
  const menu = document.getElementById("menu-btn");
  if (menu) menu.addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  const applyModal = document.getElementById("apply-modal");
  const applyClose = document.getElementById("apply-close");
  const applyCancelBtn = document.getElementById("apply-cancel-btn");
  const applyGoogleBtn = document.getElementById("apply-google-btn");
  if (applyClose) applyClose.addEventListener("click", () => applyModal.classList.remove("open"));
  if (applyCancelBtn) applyCancelBtn.addEventListener("click", () => applyModal.classList.remove("open"));
  if (applyModal) applyModal.addEventListener("click", e => { if (e.target === applyModal) applyModal.classList.remove("open"); });
  if (applyGoogleBtn) applyGoogleBtn.addEventListener("click", () => applyModal.classList.remove("open"));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// Reusable counter initializer for any element with `data-count` and optional `data-suffix`
function initCounters() {
  const format = v => (typeof v === 'number' ? v.toLocaleString() : v);
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = "1";
    const target = Number(entry.target.dataset.count) || 0;
    const suffix = entry.target.dataset.suffix || (target >= 1000 ? "+" : "");
    const isK = String(suffix).includes("K");
    const decimals = Number(entry.target.dataset.decimals) || 0;
    const shown = isK ? target / 1000 : target;
    const display = value => decimals ? Number(value).toFixed(decimals) : format(Math.round(value));
    let n = 0;
    const step = shown / 35;
    const timer = setInterval(() => {
      n += step;
      if (n >= shown) {
        n = shown;
        clearInterval(timer);
        // final display after count-up
        const liveEnabled = entry.target.dataset.live === "true";
        if (liveEnabled) {
          // start subtle live updates based on type
          let current = target;
          entry.target.textContent = isK ? display(current / 1000) + suffix : format(current) + suffix;
          setInterval(() => {
            // 60% chance to change at each tick; keep changes small
            if (Math.random() > 0.4) {
              const magnitude = isK ? Math.floor(Math.random() * 120) : Math.max(1, Math.floor(Math.random() * Math.max(2, Math.round(target * 0.03))));
              // sometimes increment, sometimes decrement slightly
              if (Math.random() > 0.35) current += magnitude; else current = Math.max(0, current - Math.floor(magnitude / 3));
              if (isK) entry.target.textContent = display(current / 1000) + suffix;
              else entry.target.textContent = format(current) + suffix;
              entry.target.style.color = "#2563eb";
              setTimeout(() => entry.target.style.color = "", 350);
            }
          }, Math.random() * 2500 + 1500);
        } else {
          entry.target.textContent = display(n) + suffix;
        }
      } else {
        entry.target.textContent = display(n) + suffix;
      }
    }, 35);
  }), {threshold:.5});
  document.querySelectorAll("[data-count]").forEach(x => observer.observe(x));
}

function getRepoSubmissions() {
  return JSON.parse(localStorage.getItem("tda-repo-submissions") || "[]");
}

function saveRepoSubmission(submission) {
  const submissions = getRepoSubmissions();
  const index = submissions.findIndex(s => s.repoUrl === submission.repoUrl && s.email === submission.email);
  if (index !== -1) submissions[index] = submission;
  else submissions.push(submission);
  localStorage.setItem("tda-repo-submissions", JSON.stringify(submissions));
}

function getRepoSubmissionForEmail(email) {
  if (!email) return null;
  return getRepoSubmissions().find(s => s.email?.toLowerCase() === email.toLowerCase()) || null;
}

function initHome() {
  document.querySelectorAll("[data-filter-group='tech'] .filter").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter-group='tech'] .filter").forEach(x=>x.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".tech-card").forEach(card => card.hidden = button.dataset.filter !== "All" && card.dataset.category !== button.dataset.filter);
  }));
  // Initialize any counters on the page (elements with data-count)
  initCounters();
}

function initStudent() {
  // Any student page specific initializers
  initCounters();
}


function initProjects() {
  document.querySelectorAll("[data-filter-group='projects'] .filter").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter-group='projects'] .filter").forEach(x=>x.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".project-card").forEach(card => card.hidden = button.dataset.filter !== "All" && card.dataset.status !== button.dataset.filter);
  }));
  document.querySelectorAll("[data-demo]").forEach(x=>x.addEventListener("click",e=>{e.preventDefault();showToast(`${x.dataset.demo} preview opened in demo mode.`);}));
  
  // Real-time data animation for projects
  document.querySelectorAll(".live-metric").forEach(el => {
    let current = Number(el.dataset.base);
    el.textContent = current.toLocaleString();
    setInterval(() => {
      if (Math.random() > 0.3) {
        current += Math.floor(Math.random() * 3) + 1;
        el.textContent = current.toLocaleString();
        el.style.transform = "scale(1.1)";
        setTimeout(() => el.style.transform = "scale(1)", 200);
      }
    }, Math.random() * 2000 + 1500);
  });

  // Live E-Project Progress bar animation
  document.querySelectorAll(".project-card").forEach(card => {
    const textEl = card.querySelector(".live-progress-text");
    const fillEl = card.querySelector(".live-progress-fill");
    if (!textEl || !fillEl) return;
    
    let current = Number(textEl.dataset.val);
    if (current >= 100) return; // Do not animate completed projects

    setInterval(() => {
      // 30% chance to increment progress by 1%
      if (Math.random() > 0.7 && current < 99) {
        current += 1;
        textEl.textContent = current + "%";
        fillEl.style.width = current + "%";
        textEl.style.color = "#2563eb"; // Highlight color momentarily
        fillEl.style.background = "linear-gradient(90deg, #2563eb, #3b82f6)";
        setTimeout(() => {
          textEl.style.color = "#475569";
          fillEl.style.background = "linear-gradient(90deg, #3b82f6, #60a5fa)";
        }, 600);
      }
    }, Math.random() * 3000 + 2000);
  });
  // Initialize counters on the projects page
  initCounters();
}

function initTasks() {
  const loginForm = document.getElementById("task-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", event => {
      event.preventDefault();
      const email = new FormData(loginForm).get("email").trim().toLowerCase();
      const enrollments = JSON.parse(localStorage.getItem("tda-enrollments") || "[]");
      const legacyApplication = JSON.parse(localStorage.getItem("tda-application") || "null");
      const match = enrollments.find(x => x.email?.toLowerCase() === email)
        || (legacyApplication?.email?.toLowerCase() === email ? legacyApplication : null);
      if (!match) {
        document.getElementById("task-login-error").textContent = "This email is not enrolled in an internship. Check the email or apply first.";
        return;
      }
      if (match.paid === false) {
        document.getElementById("task-login-error").innerHTML = "Your application is received, but you need to <a href='/pricing' class='route-link' style='color:#2563eb;text-decoration:underline'>purchase an ID Card</a> to unlock the portal.";
        bindGlobal();
        return;
      }
      sessionStorage.setItem("tda-task-email", email);
      showToast(`${match.program} tasks unlocked.`);
      render();
    });
    return;
  }

  const authenticatedEmail = sessionStorage.getItem("tda-task-email");
  const enrollments = JSON.parse(localStorage.getItem("tda-enrollments") || "[]");
  const legacyApplication = JSON.parse(localStorage.getItem("tda-application") || "null");
  const application = enrollments.find(x => x.email?.toLowerCase() === authenticatedEmail?.toLowerCase())
    || (legacyApplication?.email?.toLowerCase() === authenticatedEmail?.toLowerCase() ? legacyApplication : null);
  if (!application) return;
  const taskStorageKey = `tda-tasks-${application.program}`;

  const getSavedTasks = () => JSON.parse(localStorage.getItem(taskStorageKey) || "[]");
  const setSavedTasks = tasks => localStorage.setItem(taskStorageKey, JSON.stringify(tasks));
  const getSavedTask = i => getSavedTasks().find(item => item.index === i);
  const submissionModal = document.getElementById("task-submit-modal");
  const submissionForm = document.getElementById("task-submit-form");
  const submissionRepoInput = document.getElementById("task-submit-repo");
  const submissionDocsInput = document.getElementById("task-submit-doc");
  const modalClose = document.getElementById("task-submit-close");
  const modalCancel = document.getElementById("task-submit-cancel");
  let activeTaskIndex = null;

  const openSubmissionModal = index => {
    activeTaskIndex = index;
    submissionRepoInput.value = getSavedTask(index)?.repoUrl || "";
    submissionDocsInput.value = getSavedTask(index)?.docsUrl || "";
    submissionModal?.classList.add("open");
  };

  const closeSubmissionModal = () => {
    activeTaskIndex = null;
    submissionModal?.classList.remove("open");
  };

  const renderTaskStatus = i => {
    const submission = getSavedTask(i);
    const statusBox = document.getElementById(`task-status-${i}`);
    const submissionBox = document.getElementById(`task-submission-${i}`);
    const linksBox = document.getElementById(`task-links-${i}`);
    if (!submission) return;
    submissionBox.style.display = 'none';
    statusBox.style.display = 'grid';
    linksBox.innerHTML = `
      <div><strong>Repo:</strong> <a href="${submission.repoUrl}" target="_blank" rel="noopener" style="color:#2563eb;">${submission.repoUrl}</a></div>
      <div><strong>Docs:</strong> <a href="${submission.docsUrl}" target="_blank" rel="noopener" style="color:#2563eb;">${submission.docsUrl}</a></div>
      <div style="font-size:12px; color:#64748b;">Submitted: ${new Date(submission.submittedAt).toLocaleString()}</div>
    `;
  };

  getSavedTasks().forEach(submission => {
    const submissionBox = document.getElementById(`task-submission-${submission.index}`);
    if (submissionBox) submissionBox.style.display = 'none';
    const statusBox = document.getElementById(`task-status-${submission.index}`);
    if (statusBox) statusBox.style.display = 'grid';
    const itemButton = document.querySelector(`.submit-task-btn[data-task="${submission.index}"]`);
    const item = itemButton ? itemButton.closest('.task-item') : null;
    if (item) item.classList.add('done');
    renderTaskStatus(submission.index);
  });

  document.querySelectorAll(".submit-task-btn").forEach(btn => {
    const i = Number(btn.dataset.task);
    btn.addEventListener("click", () => openSubmissionModal(i));
  });

  submissionForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (activeTaskIndex === null) return;
    const repoUrl = submissionRepoInput.value.trim();
    const docsUrl = submissionDocsInput.value.trim();
    if (!repoUrl || !docsUrl) {
      showToast("Please enter both repository and documentation URLs.");
      return;
    }
    const newSaved = getSavedTasks();
    const existingIndex = newSaved.findIndex(item => item.index === activeTaskIndex);
    const submission = { index: activeTaskIndex, repoUrl, docsUrl, submittedAt: new Date().toISOString() };
    if (existingIndex === -1) newSaved.push(submission);
    else newSaved[existingIndex] = submission;
    setSavedTasks(newSaved);

    renderTaskStatus(activeTaskIndex);
    document.querySelector(`.submit-task-btn[data-task="${activeTaskIndex}"]`)?.closest('.task-item')?.classList.add('done');
    showToast(`Task ${activeTaskIndex+1} submitted successfully!`);
    updateTaskProgress();
    closeSubmissionModal();
  });

  modalClose?.addEventListener("click", closeSubmissionModal);
  modalCancel?.addEventListener("click", closeSubmissionModal);
  submissionModal?.addEventListener("click", event => { if (event.target === submissionModal) closeSubmissionModal(); });

  document.querySelectorAll(".undo-task-btn").forEach(btn => {
    const i = Number(btn.dataset.task);
    btn.addEventListener("click", () => {
      const newSaved = getSavedTasks().filter(item => item.index !== i);
      setSavedTasks(newSaved);

      document.getElementById(`task-status-${i}`).style.display = 'none';
      document.getElementById(`task-submission-${i}`).style.display = 'flex';
      btn.closest('.task-item')?.classList.remove('done');

      showToast(`Task ${i+1} submission removed.`);
      updateTaskProgress();
    });
  });
  document.getElementById("task-logout")?.addEventListener("click", () => {
    sessionStorage.removeItem("tda-task-email");
    render();
  });

  const downloadDoc = (title, content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  document.getElementById("download-letter")?.addEventListener("click", async (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    try {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<div style="font-size: 36px; margin-bottom: 12px;">⏳</div><div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Generating...</div><span style="font-size:13px; font-weight: 600; background:#94a3b8; color:white; padding:8px 20px; border-radius:8px; width: 100%; text-align: center;">Please Wait</span>';
      btn.style.pointerEvents = 'none';

      const response = await fetch("/api/generate-offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: application.name,
          program: application.program,
          duration: application.duration,
          email: application.email,
          startDate: new Date().toLocaleDateString(),
          batchDate: new Date().toLocaleString('default', { month: 'long', year: 'numeric' })
        })
      });

      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${application.name.replace(/\s+/g, '_')}_Offer_Letter.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      showToast("Offer Letter downloaded successfully.");
      
      btn.innerHTML = originalHtml;
      btn.style.pointerEvents = 'auto';
    } catch (err) {
      console.error(err);
      showToast("Error downloading offer letter.");
      btn.innerHTML = '<div style="font-size: 36px; margin-bottom: 12px;">📄</div><div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">Offer Letter</div><span style="font-size:13px; font-weight: 600; background:#10b981; color:white; padding:8px 20px; border-radius:8px; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2); width: 100%; text-align: center;">Download</span>';
      btn.style.pointerEvents = 'auto';
    }
  });

  const updateTaskProgress = () => {
    const total = document.querySelectorAll(".task-item").length;
    const done = document.querySelectorAll(".task-item.done").length;
    const percent = total ? Math.round(done / total * 100) : 0;
    document.getElementById("tasks-done").textContent = done;
    document.getElementById("task-percent").textContent = `${percent}%`;
    document.getElementById("side-progress").style.width = `${percent}%`;
    document.getElementById("side-progress-label").textContent = `${percent}% complete`;

    const purchased = application.purchasedDocs || [];

    document.querySelectorAll(".paid-doc-link").forEach(btn => {
      const docName = btn.dataset.doc;
      let price = 500;
      if (docName === 'Attendance Certificate') price = 200;
      else if (docName === 'Experience Letter') price = 800;

      const icon = docName.includes('Experience') ? '💼' : docName.includes('Attendance') ? '📅' : '🎓';

      if (purchased.includes(docName)) {
        if (percent === 100) {
          btn.style.color = "#10b981";
          btn.style.cursor = "pointer";
          btn.dataset.unlocked = "true";
          btn.href = "#";
          btn.innerHTML = `<div style="font-size: 36px; margin-bottom: 12px;">${icon}</div> <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">${docName}</div> <span style="font-size:13px; font-weight: 600; background:#10b981; color:white; padding:8px 20px; border-radius:8px; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2); width: 100%; text-align: center;">Download</span>`;
        } else {
          btn.style.color = "#64748b";
          btn.style.cursor = "not-allowed";
          btn.dataset.unlocked = "false";
          btn.href = "#";
          btn.innerHTML = `<div style="font-size: 36px; margin-bottom: 12px;">${icon}</div> <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">${docName}</div> <span style="font-size:13px; font-weight: 600; background:#f1f5f9; color:#64748b; padding:8px 20px; border-radius:8px; width: 100%; text-align: center;">Locked (Purchased)</span>`;
        }
      } else {
        btn.style.color = "#3b82f6";
        btn.style.cursor = "pointer";
        btn.dataset.unlocked = "false";
        btn.href = `/payment?doc=${encodeURIComponent(docName)}`;
        const lockText = percent === 100 ? "" : `<span style="font-size:11px; font-weight: 600; color:#94a3b8; display:block; margin-bottom:4px; letter-spacing: 0.5px;">LOCKED</span>`;
        btn.innerHTML = `<div style="font-size: 36px; margin-bottom: 12px;">${icon}</div> <div style="font-weight: 600; color:#1e293b; margin-bottom: 16px; font-size: 15px; text-align:center;">${docName}</div> <div style="width: 100%; text-align: center;">${lockText}<span style="font-size:13px; font-weight: 600; background:#3b82f6; color:white; padding:8px 20px; border-radius:8px; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2); transition: background 0.2s; display:inline-block; width:100%;" onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#3b82f6'">Pay ₹${price}</span></div>`;
      }
    });
  };

  document.querySelectorAll(".paid-doc-link").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const docName = btn.dataset.doc;
      if (btn.dataset.unlocked === "true") {
        e.preventDefault();
        downloadDoc(`${application.name.replace(/\\s+/g, '_')}_${docName.replace(/\\s+/g, '_')}`, `THE DEVELOPERS ARENA\\n\\n${docName.toUpperCase()}\\n\\nThis is to certify that:\\n\\n${application.name.toUpperCase()}\\n\\nhas successfully completed the ${application.program} internship program.\\nThey have demonstrated excellent skills and dedication by completing all assigned projects and tasks.\\n\\nCongratulations on your achievement!\\n\\nDate: ${new Date().toLocaleDateString()}\\nCredential ID: TDA-${Math.floor(Math.random()*1000000)}`);
        showToast(`${docName} downloaded successfully.`);
      } else if (btn.href && btn.href.includes('/payment')) {
        // Allow navigation
      } else {
        e.preventDefault();
        showToast(`You must complete 100% of your tasks to unlock your ${docName}.`);
      }
    });
  });

  updateTaskProgress();
}

function initCareer() {
  document.querySelectorAll(".resource-card").forEach(card => card.addEventListener("click", () => showToast("Career guide added to your learning list.")));
}

function initApply() {
  document.querySelectorAll(".internship-option").forEach(option => {
    // Clone option to remove old listeners just in case
    const newOption = option.cloneNode(true);
    option.parentNode.replaceChild(newOption, option);
    newOption.addEventListener("click", () => {
      const courseName = newOption.dataset.internship;
      // We don't have apply-course-name in the new popup, we just set the URL
      document.getElementById("apply-google-btn").href = "/apply-form?course=" + encodeURIComponent(courseName);
      document.getElementById("apply-modal").classList.add("open");
    });
  });
}

function initApplyForm() {
  const form = document.getElementById('application-form') || document.getElementById('google-clone-form');
  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.target));
      if (data.course) data.program = data.course;
      
      const submitButton = event.target.querySelector("button[type='submit']");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";
      }

      try {
        const response = await fetch("/api/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        if (!response.ok || !result.ok) {
          throw new Error(result.error || "Unable to submit application");
        }

        const enrollment = {
          ...data,
          applicationId: result.applicationId,
          status: "Applied",
          paid: false,
          enrolledAt: new Date().toISOString()
        };
        localStorage.setItem("tda-application", JSON.stringify(enrollment));
        const enrollments = JSON.parse(localStorage.getItem("tda-enrollments") || "[]").filter(x => x.email?.toLowerCase() !== data.email?.toLowerCase());
        enrollments.push(enrollment);
        localStorage.setItem("tda-enrollments", JSON.stringify(enrollments));
        sessionStorage.removeItem("tda-task-email");

        showSuccessOverlay(
          "Application Submitted!",
          `Your ${data.program || data.internship || "internship"} application has been received. You will get an email with payment instructions soon.`,
          "Proceed to ID Card Selection...",
          () => {
            history.pushState({}, "", "/id-card-selection");
            render();
          },
          2500
        );
      } catch (err) {
        showToast(err.message || "Could not reach the local server. Please try again.");
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Submit Application →";
        }
      }
    });
  }
}

function initFaq() {
  document.querySelectorAll(".faq button").forEach(button => button.addEventListener("click", () => {
    const faq = button.closest(".faq");
    document.querySelectorAll(".faq").forEach(x => { if (x !== faq) x.classList.remove("open"); });
    faq.classList.toggle("open");
  }));
}

function initContact() {
  document.getElementById("contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const messages = JSON.parse(localStorage.getItem("tda-messages") || "[]");
    messages.push({...Object.fromEntries(new FormData(event.target)), createdAt:new Date().toISOString()});
    localStorage.setItem("tda-messages", JSON.stringify(messages));
    event.target.reset();
    showToast("Message saved. The team can follow up from the connected backend.");
  });
}

function initStatus() {
  const results = {
    pending:["Application Under Review","Your offer letter has not arrived yet. Keep your application ID available and allow the review window to complete.","⏳"],
    onboarding:["Onboarding In Progress","Your offer is confirmed. Dashboard or ID access is the next onboarding milestone.","🪪"],
    active:["Internship Active","Your dashboard and tasks are active. Keep building and submitting work consistently.","🚀"],
    ready:["Ready to Start","Your onboarding is complete. Open the task dashboard and begin your first assignment.","✅"]
  };
  const showStep = step => {
    document.querySelectorAll(".status-step").forEach(x=>x.classList.remove("active"));
    document.querySelector(`.status-step[data-step="${step}"]`).classList.add("active");
  };
  document.querySelectorAll("[data-next]").forEach(button => button.addEventListener("click",()=>showStep(button.dataset.next)));
  document.querySelectorAll("[data-result]").forEach(button => button.addEventListener("click",()=>{
    const r=results[button.dataset.result];
    document.getElementById("status-result").innerHTML=`<div class="success-box"><div style="font-size:50px">${r[2]}</div><h2>${r[0]}</h2><p>${r[1]}</p><a class="btn btn-primary route-link" href="/task">View Demo Dashboard</a></div>`;
    showStep("result"); bindGlobal();
  }));
  document.getElementById("restart-status").addEventListener("click",()=>showStep("1"));
}

function showSuccessOverlay(title, message, redirectText, callback, delay = 2000) {
  const overlay = document.getElementById('success-overlay');
  if (!overlay) { if (callback) callback(); return; }
  document.getElementById('success-title').textContent = title;
  document.getElementById('success-message').textContent = message;
  document.getElementById('success-redirect-text').textContent = redirectText;
  overlay.classList.add('visible');
  setTimeout(() => {
    overlay.classList.remove('visible');
    if (callback) callback();
  }, delay);
}

function initIdCardSelection() {
  // Save URL parameters to localStorage if coming from email link
  const params = new URLSearchParams(window.location.search);
  const urlEmail = params.get('email');
  const urlName = params.get('name');
  const urlProgram = params.get('program');
  
  if (urlEmail || urlName || urlProgram) {
    const application = {
      email: urlEmail || "",
      name: urlName || "Intern",
      program: urlProgram || "Internship"
    };
    localStorage.setItem("tda-application", JSON.stringify(application));
  }

  let selectedPlan = null;
  const continueBtn = document.getElementById('continue-to-payment');
  const planLabel = document.getElementById('preview-plan-label');

  document.querySelectorAll('.id-plan-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.id-plan-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedPlan = card.dataset.planName;
      continueBtn.disabled = false;
      continueBtn.textContent = `Continue to Payment · ₹${card.dataset.planPrice} →`;
      if (planLabel) planLabel.textContent = selectedPlan.replace(' ID Card', '');
    });
  });

  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (!selectedPlan) return;
      history.pushState({}, "", `/payment?plan=${encodeURIComponent(selectedPlan)}`);
      render();
    });
  }
}

function initPayment() {
  const form = document.getElementById('cashfree-clone-form');
  if(form) {
    // Auto-fill from application data if available
    const application = JSON.parse(localStorage.getItem("tda-application") || "null");
    if (application) {
      const phoneInput = form.querySelector('input[name="phone"]');
      const emailInput = form.querySelector('input[name="email"]');
      const nameInput = form.querySelector('input[name="name"]');
      const domainSelect = form.querySelector('select[name="domain"]');
      const durationSelect = form.querySelector('select[name="duration"]');
      if (phoneInput && application.phone && !phoneInput.value) phoneInput.value = application.phone;
      if (emailInput && application.email && !emailInput.value) emailInput.value = application.email;
      if (nameInput && application.name && !nameInput.value) nameInput.value = application.name;
      if (domainSelect && application.program) domainSelect.value = application.program;
      if (durationSelect && application.duration) durationSelect.value = application.duration;
    }

    form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = formData.get("email").trim().toLowerCase();
      const purchaseType = formData.get("purchaseType");
      const itemName = formData.get("itemName");
      const userName = formData.get("name") || "Intern";
      
      const button = event.target.querySelector("button[type='submit']");
      button.disabled = true; button.textContent = "Processing...";
      setTimeout(() => {
        const enrollments = JSON.parse(localStorage.getItem("tda-enrollments") || "[]");
        const matchIndex = enrollments.findIndex(x => x.email?.toLowerCase() === email);
        if (matchIndex !== -1) {
          if (purchaseType === 'doc') {
            enrollments[matchIndex].purchasedDocs = enrollments[matchIndex].purchasedDocs || [];
            if (!enrollments[matchIndex].purchasedDocs.includes(itemName)) {
              enrollments[matchIndex].purchasedDocs.push(itemName);
            }
          } else {
            enrollments[matchIndex].paid = true;
            enrollments[matchIndex].status = "Active";
            enrollments[matchIndex].name = enrollments[matchIndex].name || userName;
          }
          localStorage.setItem("tda-enrollments", JSON.stringify(enrollments));
        } else {
          const newEnrollment = { email: email, name: userName, program: formData.get("domain"), duration: formData.get("duration"), paid: purchaseType !== 'doc', status: "Active", enrolledAt: new Date().toISOString() };
          if (purchaseType === 'doc') newEnrollment.purchasedDocs = [itemName];
          enrollments.push(newEnrollment);
          localStorage.setItem("tda-enrollments", JSON.stringify(enrollments));
        }

        sessionStorage.setItem("tda-task-email", email);
        
        if (purchaseType === 'doc') {
          showToast("Payment successful.");
          history.pushState({}, "", "/task");
          render();
        } else {
          // Show success overlay with ID card ready message
          showSuccessOverlay(
            "Payment Successful!",
            `Your ${itemName} is now active. Welcome to the intern dashboard, ${userName}!`,
            "Opening your dashboard...",
            () => {
              history.pushState({}, "", "/task");
              render();
            },
            2500
          );
        }
      }, 1500);
    });
  }
}

window.addEventListener("popstate", render);
render();
