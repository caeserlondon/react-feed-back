import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
	return (
		<Card>
			<div className='about'>
				<h2>Feed Back And Reviews</h2>
				<p>React V18 App with Router V6 to leave rating and reviews.</p>
				<Link to='/'>Back to the home page</Link>
			</div>
		</Card>
	)
}

export default AboutPage
