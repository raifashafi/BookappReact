import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">book name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">category</label>
                            <select name="" id="" className="form-control">
                                <option value="fiction">fiction</option>
                                <option value="fairytale">fairytale</option>
                                <option value="autobiography">autobiography</option>
                            </select>


                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">published year</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">author name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">book description</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">publisher name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">edition</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">distributor name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">price</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddBook