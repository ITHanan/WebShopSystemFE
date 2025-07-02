import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CourseDescription.css'
import instructorImg from '../images/instructor.png'
import flagImg from '../images/swedish-flag.png' 
import Header from './Header'
import Footer from "./Footer"
const CourseDescription = () => {
	const navigate = useNavigate()
	
	const handleRegister = () => {
		navigate('/signup')
	}
	
	return (
		<div>
			<Header></Header>
		<div className='course-page'>
		<h1 className='course-title'>
		<img src={flagImg} alt='Swedish Flag' className='flag-icon' /> Swedish Course
		</h1>
		
		<div className='course-header'>
		<div className='course-info'>
		<h2>Everyday Swedish Conversations Course</h2>
		</div>
		<div className='instructor-box'>
		<div className='instructor-text'>
		<p><strong className='label'>Instructor Info</strong></p>
		<p>Instructor: Layla Johansson</p>
		<p>Expert in teaching Swedish conversation</p>
		<p>⭐⭐⭐⭐☆</p>
		</div>
		<img src={instructorImg} alt='Instructor' className='instructor-img' />
		</div>
		</div>
		
		<div className='course-section'>
		<h3>Course Description</h3>
		<p>
		In this course, you will learn how to speak Swedish in everyday situations like shopping, restaurants, and traveling
		This course is specially designed to improve your daily conversation skills in Swedish. You will learn how to speak confidently in real-life situations such as shopping, traveling, and socializing. The course includes interactive exercises, voice conversations, and educational videos that help you apply what you learn in a practical and smooth way.
		</p>
		</div>
		
		<div className='course-section'>
		<h3>Course Duration</h3>
		<p>The course duration is 6 weeks, with 2 hours per week.</p>
		</div>
		
		<div className='course-section'>
		<h3>Difficulty Level</h3>
		<p>
		This course is suitable for all levels, especially beginners starting from scratch. You can progress at your own pace, and there is advanced content for those who want to deepen their skills.
		</p><p><strong>Beginner<br />Intermediate<br />Upper-Intermediate<br />Pre-Advanced<br />Advanced
		</strong></p>
		</div>
		
		<div className='course-section'>
		<h3>Prerequisites</h3>
		<p>No prerequisites required</p>
		</div>
		
		<div className='course-section'>
		<h3>Course Materials</h3>
		<p>The course includes audio recordings, educational videos och PDF files.</p>
		</div>
		
		<div className='course-section'>
		<h3>Certificate</h3>
		<p>
		Upon completion of the course and passing the tests, you will receive an electronic certificate proving your new Swedish language skills.
		</p>
		</div>
		
		<button className='register-btn' onClick={handleRegister}>Register</button>
		</div>
		<Footer></Footer></div>
	)
}

export default CourseDescription
