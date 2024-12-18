import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  CreateShipmentPage, 
  HomePage, 
  PaymentReviewPage, 
  TrackResultsPage, 
  RegisterPage,
} from './scenes';
import ScrollToTopButton from './constants/ScrollToTop';


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createshipment' element={<CreateShipmentPage />} />
          <Route path='/createshipment-payment' element={<PaymentReviewPage />} />
          <Route path='/trackshipment' element={<TrackResultsPage />} />
          
          <Route path='/register' element={<RegisterPage />} />
        </Routes>

        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  )
};

export default App;