import React from 'react'
import Navbar from './Navbar'

const ViewBook = () => {
  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">author</th>
      <th scope="col">published year</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>aadujeevitham</td>
      <td>benyamin</td>
      <td>2000</td>
      <td>170</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>fairy</td>
      <td>jonson</td>
      <td>2015</td>
      <td>205</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>fairy</td>
      <td>jonson</td>
      <td>2015</td>
      <td>205</td>



    </tr>
    <tr>
      <th scope="row">4</th>
      <td>ikkigai</td>
      <td>sony</td>
      <td>2015</td>
      <td>255</td>



    </tr>
    
    <tr>
      <th scope="row">5</th>
      <td>ocean</td>
      <td>jisna</td>
      <td>2000</td>
      <td>150</td>



    </tr>
    
    <tr>
      <th scope="row">6</th>
      <td>white tiger</td>
      <td>jacob</td>
      <td>2014</td>
      <td>118</td>



    </tr>
    <tr>
      <th scope="row">7</th>
      <td>the lion</td>
      <td>joseph</td>
      <td>2023</td>
      <td>120</td>



    </tr>
    <tr>
      <th scope="row">8</th>
      <td>balyakalasakhi</td>
      <td>basheer</td>
      <td>1999</td>
      <td>150</td>



    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBook