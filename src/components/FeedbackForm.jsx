import Card from './shared/Card'
import { useState } from 'react'

const FeedbackForm = () => {
	const [text, setText] = useState('')

	const handleTextChange = (e) => {
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
					<button type='submit'>Submit</button>
				</div>
			</form>
		</Card>
	)
}

export default FeedbackForm
