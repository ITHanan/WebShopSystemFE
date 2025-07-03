import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/CourseDetail.css';
import SwedishFlag from '../assets/swedish.png';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const mockCourse = {
      id: 1,
      name: "Swedish",
      title: "Everyday Swedish Conversations Course",
      instructorName: "Layla Johansson",
      instructorBio: "Expert in teaching Swedish conversations",
      instructorPhotoUrl: "https://thispersondoesnotexist.com/",
      rating: 4.8,
      description: "This course teaches you how to speak Swedish in everyday situations...",
      duration: "6 weeks, with 2 hours per week",
      levels: ["Beginner", "Upper-Intermediate", "Intermediate", "Pre-Advanced", "Advanced"],
      prerequisites: "No prerequisites required",
      materials: "Audio recordings, educational videos, and PDF files",
      certificateInfo: "You will receive an electronic certificate..."
    };

    setCourse(mockCourse);
  }, []);

    // useEffect(() => {
    //     axios.get(`https://localhost:7234/api/courses/${id}`)
    //         .then(res => setCourse(res.data))
    //         .catch(err => console.error('Failed to fetch course details', err));
    // }, [id]);


  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <img className="flag" src={SwedishFlag} alt="Flag" />
        <h1>{course.name} Course</h1>
      </div>

        <div className="course-summary">
            <div className="course-main-title">
                {course.title}
            </div>

            <div className="instructor-card">
                    <div className='instructor-info'>
                        <p><strong>Instructor:</strong> {course.instructorName}</p>
                        <p>{course.instructorBio}</p>
                        <p>⭐ {course.rating}</p>
                    </div>
                    <img className="instructor-photo" src={course.instructorPhotoUrl} alt="Instructor" />
            </div>
        </div>

        <div className="course-section">
            <h3>Course Description</h3>
            <p>{course.description}</p>

            <h3>Course Duration</h3>
            <p>{course.duration}</p>

            <h3>Difficulty Level</h3>
            <ul>
            {course.levels.map((lvl, i) => <li key={i}>{lvl}</li>)}
            </ul>

            <h3>Prerequisites</h3>
            <p>{course.prerequisites}</p>

            <h3>Course Materials</h3>
            <p>{course.materials}</p>

            <h3>Certificate</h3>
            <p>{course.certificateInfo}</p>
        </div>
        <div className="register-button-container">
            <button 
                className="register-button"
                onClick={() => alert(`You registered for ${course.name} Course!`)}
            >
                Register
            </button>
        </div>

    </div>
  );
};

export default CourseDetail;
