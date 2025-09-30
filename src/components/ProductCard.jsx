import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData, deleteProductData } from '../slices/ProductSlices'
import Table from 'react-bootstrap/Table';
import products from '../pages/products';


const ProductCard = (store) => {
  const [searchValue, setSearchValue] = useState("")
  const [selectCategory, setSelectCategory] = useState("")

  const dispatch = useDispatch()
  const [id, setid] = useState()
  const { product, isloading, error } = useSelector((state) => state.product)


  useEffect(() => {
    dispatch(fetchProductData())

  }, [dispatch])

  return (
    <div>
      <div className='contentContainer'>

        <div className='Filter mt-4  mb-5 '>
          <input placeholder='Search..' onChange={(e) => setSearchValue(e.target.value)} />

          <select>
            <option>Selete Category</option>
            <option>men's clothing</option>
            <option>women's clothing</option>
            <option>electronics</option>
            <option>jewelery</option>
          </select>
        </div>

        <Table className='border' responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((e, i) => (
              <tr key={i}>
                <td><img src={e.image} height={"50px"} width={"50px"} /></td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>${e.price}</td>
                <td><button className='btn btn-outline-success'>edit</button></td>
                <td><button className='btn btn-outline-danger' onClick={() => (dispatch(deleteProductData(e.id)), location.reload())}>delete</button></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ProductCard
