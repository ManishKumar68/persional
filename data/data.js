var DATA = {
  "site": {
    "email": "manishkanojia79@gmail.com",
    "phone": "+91-8651060667",
    "github": "https://github.com/ManishKumar68",
    "linkedin": "https://www.linkedin.com/in/manish-kumar79",
   "blog": [
  {
    "title": "Starting the Daily Learning Journay",
    "date": "23 November 2026",
    "summary":  "Tech.. journay"
  },
  {
    "title": "Explore new concept",
    "date": "24 November 2026",
    "summary": [ 
                "Spent today sharpening my C++ fundamentals on YouTube—practicing bool, char, auto, and mixed-type operations by solving two coding problems.",
                "explored game-based coding platforms like Codédex and The Farmer Was Replaced  to see how logic drives game mechanics.",
                "checked out linkedin to fresher software openings at HCLTech and more company.",
               ]
  }
],
    "resume": {
      "summary": "Computer Science Engineering graduate with internship and full-stack project experience. Skilled in C++, DSA, SQL, responsive web development, backend functionality, database management, and debugging. Interested in software development and API integration.",
      "skills": [
        { "category": "Programming Languages", "items": "C++, DSA, SQL" },
        { "category": "Frontend", "items": "HTML5, CSS, Responsive UI Design" },
        { "category": "Databases", "items": "MySQL" },
        { "category": "Development Tools", "items": "Git, Linux, Windows, AI Tools" },
        { "category": "Additional Technologies", "items": "Networking, Google Gemini AI, ChatGPT" },
        { "category": "Certificate", "items": "Cisco Packet Tracer" }
      ],
      "training": {
        "title": "Advanced Certificate Course (ACC) in High Performance Computing (HPC)",
        "organization": "Centre for Development of Advanced Computing (C-DAC), Noida",
        "period": "20 July 2026 – 31 December 2026",
        "details": [
          "Undergoing specialized training in High Performance Computing (HPC).",
          "Learning HPC architecture, Linux, parallel programming, MPI, OpenMP, CUDA, and performance optimization."
        ]
      },
      "experience": {
        "organization": "Dream Infonet Pvt. Ltd.",
        "role": "Web Development Intern",
        "period": "October 2024 – December 2024",
        "location": "Delhi / Remote",
        "details": [
          "Worked on web development tasks involving frontend interfaces, application functionality, and debugging within an existing codebase during a 10-week internship.",
          "Contributed to the implementation and refinement of web application features while following development requirements and project timelines.",
          "Collaborated on practical development tasks and gained exposure to software development workflows, code quality practices, and debugging techniques.",
          "Received recognition from engineering management for code quality and timely delivery."
        ]
      },
      "projects": [
        {
          "title": "Tree Monitoring Platform",
          "technologies": "React 19, PostgreSQL, Drizzle ORM, TypeScript",
          "details": [
            "Developed a full-stack environmental monitoring platform concept for tracking plantation sites and organizing tree monitoring data.",
            "Designed project features for integrating IoT sensor telemetry, satellite-based NDVI analysis, and AI-assisted image recognition for tree-health monitoring.",
            "Implemented role-based access concepts for citizens, forest officers, and administrators, with OTP verification and SMTP notifications.",
            "Structured the application as a pnpm monorepo using Drizzle ORM and TypeScript, with OpenAPI and Orval for API contract documentation and type-safe API integration."
          ]
        },
        {
          "title": "SaaS Documentation Hub",
          "technologies": "React, Node.js, MongoDB, Google Gemini AI",
          "details": [
            "Built a documentation management application with project workspaces to organize technical documents and make information easier for engineering teams to access.",
            "Integrated Google Gemini AI to support context-aware question answering based on project documentation.",
            "Implemented JWT-based authentication, dark mode, interactive data visualizations, and a responsive user interface using Tailwind CSS.",
            "Prepared the application for deployment using Vercel, supporting access to the web application online."
          ]
        },
        {
          "title": "Job Portal with AI-Powered ATS",
          "technologies": "MERN Stack, NLP, JWT, MongoDB Atlas",
          "details": [
            "Developed a full-stack job portal supporting employer job postings and candidate applications using the MERN stack.",
            "Integrated an NLP-based resume-scanning feature for skill extraction and candidate-to-job matching.",
            "Implemented JWT authentication and used MongoDB Atlas for application data storage.",
            "Collaborated on project development using the Rapid Application Development (RAD) methodology and prepared deployment across Vercel, Render, and MongoDB Atlas."
          ]
        },
        {
          "title": "College Management System – Login Module",
          "technologies": "PHP, MySQL",
          "details": [
            "Developed a role-based login and access-control module for administrators, teachers, and students.",
            "Worked with PHP and MySQL to support management of student information, grades, and attendance records.",
            "Structured access to application features according to user roles to support appropriate data access."
          ]
        }
      ],
      "education": [
        {
          "degree": "Bachelor of Technology in Computer Science Engineering",
          "institution": "Gyan Ganga College of Technology, Jabalpur, MP",
          "period": "October 2023 – July 2026",
          "result": "CGPA: 7.85/10"
        },
        {
          "degree": "Diploma in Computer Science Engineering",
          "institution": "Ambition Institute of Technology, Varanasi, UP",
          "period": "November 2021 – May 2023",
          "result": "76.8%"
        }
      ]
    }
  },
  "projects": [
    {
      "id": 1,
      "title": "Dot-Explorer Tree Monitoring System",
      "desc": "Full-stack tree plantation and monitoring platform for forest conservation.",
      "tech": "React, TypeScript, Express.js, PostgreSQL, Drizzle ORM, pnpm",
      "explain": "Tracks plantations, satellite NDVI deforestation signals, IoT sensor readings, AI image analysis, and tamper-resistant audit records. The monorepo includes a React frontend and Express API with shared database and OpenAPI schemas.",
      "feat": "Citizen, officer, and admin authentication\nTree and plantation CRUD\nIoT sensor telemetry\nSatellite NDVI scan support\nAI image analysis workflows\nDashboard analytics and reports\nOpenAPI and generated API clients",
      "folder": "tree_tracking_system/\n├── backend/\n│   ├── src/routes/\n│   ├── src/db/schema/\n│   └── src/index.ts\n├── frontend/\n│   └── src/pages/\n├── backend/api-spec/\n├── package.json\n├── pnpm-workspace.yaml\n└── README.md",
      "files": [
        { "name": "App.tsx", "desc": "React application routes" },
        { "name": "app.ts", "desc": "Express API server setup" },
        { "name": "trees.ts", "desc": "Tree management routes" },
        { "name": "iot.ts", "desc": "IoT sensor API routes" },
        { "name": "satellite.ts", "desc": "Satellite scan API routes" },
        { "name": "openapi.yaml", "desc": "API contract specification" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/tree_tracking_system" }
      ]
    },
    {
      "id": 2,
      "title": "Documentation Hub",
      "desc": "Responsive documentation portal for organizing and exporting technical guides.",
      "tech": "React, Vite, JavaScript, Tailwind CSS",
      "explain": "Provides a modern documentation workspace with project navigation, dark mode, markdown editing, quick notes, and Markdown or ZIP exports.",
      "feat": "Documentation browsing and management\nDark and light themes\nResponsive desktop and mobile interface\nMarkdown editor\nQuick notes\nMarkdown export\nBulk ZIP export",
      "folder": "DocumentWebsite/\n├── src/\n│   ├── App.jsx\n│   ├── DocumentationHub.jsx\n│   ├── context/\n│   └── pages/\n├── server/\n│   ├── index.js\n│   └── models/\n├── index.html\n├── tailwind.config.js\n└── README.md",
      "files": [
        { "name": "App.jsx", "desc": "Main application layout" },
        { "name": "DocumentationHub.jsx", "desc": "Documentation workspace" },
        { "name": "AuthContext.jsx", "desc": "Authentication state" },
        { "name": "index.js", "desc": "Backend API server" },
        { "name": "User.js", "desc": "Database user model" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/DocumentWebsite" }
      ]
    },
    {
      "id": 3,
      "title": "School Management System",
      "desc": "PHP and MySQL system for managing school users, classes, attendance, exams, and notices.",
      "tech": "PHP, MySQL, JavaScript, Bootstrap, AdminLTE",
      "explain": "A role-based school administration platform with separate workflows for administrators, teachers, students, and parents.",
      "feat": "Student and teacher management\nSubject and classroom management\nExam scheduling and results\nAttendance tracking\nParent and student portals\nUser roles\nSchool notice distribution",
      "folder": "sms/\n├── api/\n├── database/clgdb.sql\n├── dist/\n├── bower_components/\n├── plugins/\n├── attendance.php\n├── exam.php\n├── parent.php\n├── student.php\n├── teacher.php\n└── README.md",
      "files": [
        { "name": "index.php", "desc": "Application entry page" },
        { "name": "login.php", "desc": "Role-based login" },
        { "name": "database.php", "desc": "MySQL connection" },
        { "name": "attendance.php", "desc": "Attendance management" },
        { "name": "exam.php", "desc": "Exam management" },
        { "name": "clgdb.sql", "desc": "Database schema" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/sms" }
      ]
    },
    {
      "id": 4,
      "title": "Contact Manager",
      "desc": "Spring Boot application for storing and managing contact records.",
      "tech": "Java, Spring Boot, Maven, Thymeleaf",
      "explain": "A Java web application using Spring Boot and Maven, with server-rendered templates and application configuration.",
      "feat": "Contact record interface\nSpring Boot application structure\nMaven dependency management\nThymeleaf templates\nSpring configuration",
      "folder": "Contact-Manager/\n├── cm2.0/\n│   ├── src/main/java/com/cm/\n│   ├── src/main/resources/\n│   ├── src/test/java/com/cm/\n│   ├── pom.xml\n│   └── mvnw\n└── README.md",
      "files": [
        { "name": "Application.java", "desc": "Spring Boot entry point" },
        { "name": "pom.xml", "desc": "Maven dependencies" },
        { "name": "application.properties", "desc": "Application configuration" },
        { "name": "index.html", "desc": "Thymeleaf interface" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/Contact-Manager" }
      ]
    },
    {
      "id": 5,
      "title": "Tic-Tac-Toe Console Game",
      "desc": "Java console implementation of the Tic-Tac-Toe board game.",
      "tech": "Java",
      "explain": "A two-player console game that tracks board state, prints the board, validates turns, and determines win conditions.",
      "feat": "Two-player turn system\n3x3 board state\nBoard visualization\nWin detection\nConsole input and output",
      "folder": "-Tic-Tac-Toc-Game/\n├── src/Main.java\n├── TicTacToe.java.iml\n└── README.md",
      "files": [
        { "name": "Main.java", "desc": "Game loop, board logic, and player input" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/-Tic-Tac-Toc-Game" }
      ]
    },
    {
      "id": 6,
      "title": "Java Coding Practice",
      "desc": "Collection of Java exercises covering fundamentals, arrays, loops, operators, functions, and patterns.",
      "tech": "Java",
      "explain": "A learning repository containing beginner Java source files and practice programs organized by topic.",
      "feat": "Data types and variables\nOperators and type conversion\nConditional statements\nLoops and nested loops\nArrays and binary search\nMethods and functions\nPattern programs",
      "folder": "My-Coding-Life/\n├── Arrays/\n├── Conditional Statement/\n├── Function/\n├── JavaLoops/\n├── Operators/\n├── Patterns/\n└── README.md",
      "files": [
        { "name": "JavaBasic.java", "desc": "Basic Java program" },
        { "name": "BinarySearch.java", "desc": "Binary search implementation" },
        { "name": "WhileLoop.java", "desc": "While-loop practice" },
        { "name": "NestedLoops.java", "desc": "Pattern and nested-loop practice" },
        { "name": "methods.java", "desc": "Java method examples" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/My-Coding-Life" }
      ]
    },
    {
      "id": 7,
      "title": "AI Mock Interview Agent",
      "desc": "AI-based mock interview project repository.",
      "tech": "AI, Interview Practice",
      "explain": "Public GitHub repository for the AI mock interview agent project. Source files are currently limited and the repository can be extended with the interview engine and interface.",
      "feat": "GitHub project repository\nPlanned AI interview workflow\nPlanned mock interview questions\nPlanned answer evaluation",
      "folder": "AI-mock-interview-agent/\n└── README.md",
      "files": [
        { "name": "README.md", "desc": "Repository documentation" }
      ],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/AI-mock-interview-agent" }
      ]
    },
    {
      "id": 8,
      "title": "ATS",
      "desc": "Applicant Tracking System project repository.",
      "tech": "Application Tracking, Recruitment",
      "explain": "Public GitHub repository for the ATS project. The repository is currently empty or does not contain downloadable source files.",
      "feat": "GitHub project repository",
      "folder": "ATS/",
      "files": [],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/ATS" }
      ]
    },
    {
      "id": 9,
      "title": "ACC HPC C-DAC",
      "desc": "High Performance Computing training repository.",
      "tech": "Linux, C/C++, MPI, OpenMP, CUDA",
      "explain": "Public GitHub repository for C-DAC Advanced Certificate Course (ACC) in High Performance Computing work and practice.",
      "feat": "HPC training repository\nParallel programming\nLinux and C/C++ practice",
      "folder": "Acc---HPC-C---DAC/",
      "files": [],
      "links": [
        { "label": "GitHub Repository", "url": "https://github.com/ManishKumar68/Acc---HPC-C---DAC" }
      ]
    }
  ]
};   
