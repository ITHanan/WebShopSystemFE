import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CourseList.css';
import SwedishFlag from '../assets/swedish.png';
import JapaneseFlag from '../assets/japanese.png';
import ItalianFlag from '../assets/italian.png';
import FrenchFlag from '../assets/french.png';
import TurkishFlag from '../assets/turkish.png';
import EnglishFlag from '../assets/british.png';

const CourseList = () => {
	const [courses, setCourses] = useState([]);
	
	//Dummy data for courses to test the UI
	useEffect(() => {
		
		const mockCourses = [
			{
				id: 1,
				name: 'Swedish',
				flagUrl: SwedishFlag,
				description: 'Learn Swedish comprehensively, including daily conversation, grammar, and pronunciation.',
				lessons: 12,
				videoCount: 500,
				pdfCount: 600,
				audioCount: 1000
			},
			{
				id: 2,
				name: 'Japanese',
				flagUrl: JapaneseFlag,
				description: 'Master Japanese for travel, work, and culture with structured lessons and practice.',
				lessons: 15,
				videoCount: 700,
				pdfCount: 400,
				audioCount: 1200
			},
			{
				id: 3,
				name: 'Italian',
				flagUrl: ItalianFlag,
				description: 'Speak Italian confidently with lessons designed for real-world communication.',
				lessons: 10,
				videoCount: 530,
				pdfCount: 300,
				audioCount: 1100
			},
			{
				id: 4,
				name: 'French',
				flagUrl: FrenchFlag,
				description: 'French for everyday life and business. Improve listening, reading, and speaking.',
				lessons: 14,
				videoCount: 650,
				pdfCount: 500,
				audioCount: 1050
			},
			{
				id: 5,
				name: 'Turkish',
				flagUrl: TurkishFlag,
				description: 'Learn Turkish easily with clear explanations and useful dialogues.',
				lessons: 11,
				videoCount: 480,
				pdfCount: 320,
				audioCount: 950
			},
			{
				id: 6,
				name: 'English',
				flagUrl: EnglishFlag,
				description: 'Boost your English skills for work, travel, and academic success.',
				lessons: 18,
				videoCount: 800,
				pdfCount: 700,
				audioCount: 1300
			}
		];
		
		setCourses(mockCourses);
	}, []);
	
	
	
	
	//   useEffect(() => {
		//     axios.get('https://localhost:7234/api/courses')
	//       .then(res => setCourses(res.data))
	//       .catch(err => console.error('Failed to fetch courses', err));
	//   }, []);
	
	
	
	
	
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
			
			<Link className="explore-link" to={`/course/${course.id}`}>Explore Course</Link>
			</div>
		))}
		</div>
	);
};

export default CourseList;
