import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../pages/404'
import APropos from '../../pages/A-Propos'
import Fiche from '../../pages/Fiche-Logements'

//Route ERROR a revoir (switch, pour que toutes les pages erronées tombent bien sur le 404)
function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/logement/:id" element={<Fiche />} />
        <Route exact path="/a-propos" element={<APropos />} />
        <Route exact path="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRoutes
