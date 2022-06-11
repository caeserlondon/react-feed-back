import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this text is from context',
			rating: 10,
		},
	])

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
