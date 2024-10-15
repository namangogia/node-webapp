const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const lessons = [
  { id: 1, title: 'HTML Basics', content: 'HTML is the standard markup language for creating web pages.' },
  { id: 2, title: 'CSS Fundamentals', content: 'CSS is used to style and layout web pages.' },
  { id: 3, title: 'JavaScript Introduction', content: 'JavaScript is a programming language that enables interactive web pages.' },
  { id: 4, title: 'Responsive Design', content: 'Responsive design makes web pages look good on all devices.' },
  { id: 5, title: 'Web Accessibility', content: 'Web accessibility ensures that people with disabilities can use websites.' }
];

app.get('/api/lessons', (req, res) => {
  res.json(lessons);
});

app.get('/api/lessons/:id', (req, res) => {
  const lesson = lessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) return res.status(404).send('Lesson not found');
  res.json(lesson);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});