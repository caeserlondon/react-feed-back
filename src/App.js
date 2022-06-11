import Header from './components/Header'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this review ?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()

		setFeedback([newFeedback, ...feedback])
	}

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
								<AboutIconLink />
							</>
						}
					/>

					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
