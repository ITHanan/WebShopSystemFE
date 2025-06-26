import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7234/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Failed to fetch courses', err));
  }, []);

  return (
    <div className="course-list-container">
      <h2 className="course-heading">Course List</h2>
      <p className="course-subheading">
        Here you can explore all available languages and learn<br />
        about the content of our courses before choosing what suits you
      </p>

      {courses.map((course, index) => (
        <div className="course-card" key={index}>
          <div className="course-flag-name">
            <img src={course.flagUrl} alt={`${course.name} flag`} className="flag-icon" />
            <h3>{course.name} Course</h3>
          </div>

          <p className="course-label">Course Description:</p>
          <p className="course-desc">{course.description}</p>

          <ul className="course-details">
            <li><strong>Lessons:</strong> {course.lessons}</li>
            <li><strong>Videos:</strong> more than {course.videoCount}</li>
            <li><strong>PDFs:</strong> more than {course.pdfCount}</li>
            <li><strong>Audio exercises:</strong> more than {course.audioCount}</li>
          </ul>

          <a className="explore-link" href={`/course/${course.id}`}>Explore Course</a>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
