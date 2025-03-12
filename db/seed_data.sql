-- Seed data for courses table
INSERT INTO courses (title, description, materials, price, image_url) VALUES
('Web Development Fundamentals', 'Learn the basics of web development including HTML, CSS, and JavaScript', ARRAY['HTML5 Basics', 'CSS3 Styling', 'JavaScript Fundamentals', 'Responsive Design', 'Basic Project'], 2500000, 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2343&q=80'),
('Digital Marketing Essentials', 'Master the fundamentals of digital marketing strategies and tools', ARRAY['Social Media Marketing', 'SEO Fundamentals', 'Content Marketing', 'Email Marketing', 'Analytics Basics'], 1800000, 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'),
('Data Science Basics', 'Introduction to data science concepts and Python programming', ARRAY['Python Programming', 'Data Analysis', 'Statistical Methods', 'Data Visualization', 'Machine Learning Intro'], 3000000, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');

-- Seed data for users table
INSERT INTO users (name, email, password_hash) VALUES
('John Doe', 'john@example.com', 'hashed_password_1'),
('Jane Smith', 'jane@example.com', 'hashed_password_2'),
('Bob Wilson', 'bob@example.com', 'hashed_password_3');

-- Seed data for enrollments table
INSERT INTO enrollments (user_id, course_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 2);