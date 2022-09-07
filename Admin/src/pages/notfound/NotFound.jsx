import { Link } from 'react-router-dom'
import './notfound.scss'
const NotFound = () => {
	return (
		<div class="container">
			<h1>An error as occured.</h1>
			<h1> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
			<Link to="/">Go back</Link>
		</div>
	)
}

export default NotFound
