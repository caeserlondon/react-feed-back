import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

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

	return (
		<Card>
			<form>
				<h2>How would you rate our service?</h2>
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
