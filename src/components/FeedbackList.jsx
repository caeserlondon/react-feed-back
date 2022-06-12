// import FeedbackItem from '../components/FeedbackItem'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <h1 style={{ color: 'darkorange' }}>No Feedback Yet</h1>
	}

	return (
		<div className='feedback-list'>
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default FeedbackList
