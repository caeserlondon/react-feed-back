import Card from './shared/Card'
import { useState, useContext } from 'react'
import Button from './shared/Button'
import RatingButtons from './RatingButtons'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = () => {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState(10)
	const { addFeedback } = useContext(FeedbackContext)

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Text must be al least 10 characters long')
		} else {
			setBtnDisabled(false)
			setMessage(null)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			addFeedback(newFeedback)
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service?</h2>
				<RatingButtons
					select={(rating) => setRating(rating)}
					selected={rating}
				/>
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Submit
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
