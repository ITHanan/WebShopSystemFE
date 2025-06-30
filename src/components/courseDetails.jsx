import React, { useEffect, useState } from 'react';
import '../styles/CourseDetail.css';

const CourseDetail = () => {

  const [course, setCourse] = useState(null);

  const mockCourse = {
    "id": 1,
    "name": "Swedish",
    "title": "Everyday Swedish Conversations Course",
    "instructorName": "Layla Johansson",
    "instructorBio": "Expert in teaching Swedish conversations",
    "instructorPhotoUrl": "https://example.com/layla.jpg",
    "rating": 4.8,
    "description": "This course teaches you how to speak Swedish in everyday situations...",
    "duration": "6 weeks, with 2 hours per week",
    "levels": ["Beginner", "Upper-Intermediate", "Intermediate", "Pre-Advanced", "Advanced"],
    "prerequisites": "No prerequisites required",
    "materials": "Audio recordings, educational videos, and PDF files",
    "certificateInfo": "You will receive an electronic certificate..."
    }



  return (
    <div className="course-detail-container">
      <div className="course-header">
        <img className="flag" src={`/assets/${course.name.toLowerCase()}.png`} alt={`${course.name} flag`} />
        <h1>{mockCourse.name} Course</h1>
      </div>
    </div>
  );
};

export default CourseDetail;
