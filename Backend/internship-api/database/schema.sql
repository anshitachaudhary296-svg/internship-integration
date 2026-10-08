CREATE TABLE IF NOT EXISTS internships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    domain TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    skills TEXT NOT NULL,
    description TEXT NOT NULL,
    stipend REAL NOT NULL,
    duration TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_internships_domain ON internships(domain);
CREATE INDEX IF NOT EXISTS idx_internships_type ON internships(type);
CREATE INDEX IF NOT EXISTS idx_internships_location ON internships(location);


CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    internship_id INTEGER NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    resume_url TEXT NOT NULL,
    cover_message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (internship_id) REFERENCES internships(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_applications_internship_id ON applications(internship_id);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at);
