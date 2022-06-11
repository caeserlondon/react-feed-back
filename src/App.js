import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './components/context/FeedbackContext.jsx'

const App = () => {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
									<AboutIconLink />
								</>
							}
						/>

						<Route path='/about' element={<AboutPage />} />
					</Routes>
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
