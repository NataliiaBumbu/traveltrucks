import { Helmet } from 'react-helmet-async'
import Header from '../../components/Header/Header'
const HomePage = () => {
    return (
      <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <Header/>
      </>
  )
}

export default HomePage

