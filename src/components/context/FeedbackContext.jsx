import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([])

	useEffect(() => {
		fetchFeedback()
	}, [])

	const fetchFeedback = () => {
		setFeedback(FeedbackData)
	}

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this review ?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()

		setFeedback([newFeedback, ...feedback])
	}

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	const updateFeedback = (id, updatedItem) => {
		setFeedback(
			feedback.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			)
		)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
