import React from 'react'

export default function Filters(props) {
  const { handlePrintType, handleBookType } = props;

  return (
    <div>
      <form
        className='printTypeFilter'
        onChange={e => handlePrintType(e.target.value)}
      >
      <label htmlFor='print-type'>Print Type: </label>
        <select>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </form>

      <form
        className='bookTypeFilter'
        onChange={e => handleBookType(e.target.value)}
      >
      <label htmlFor='book-type'>Book Type: </label>
        <select>
          <option value="ebooks">All eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="full">Fully Available eBooks</option>
          <option value="partial">Partially Available eBooks</option>
        </select>
      </form>
    </div>


    // <form onSubmit={(e)=>{e.preventDefault();
    //   props.handleSubmit()}
    //   }>
    //     <label name='search'>Search: </label>
    //     <input 
    //       id='searchForm' 
    //       type="text" value={props.query} 
    //       onChange={(e)=>{e.preventDefault(); props.handleChange(e.target.value)}}>
    //     </input>
    //     <button type='submit'>Search</button><br></br>
        
    //     <label htmlFor='print-type'>Print Type</label>
    //     <select>
    //       <option value="all">All</option>
    //       <option value="books">Books</option>
    //       <option value="magazines">Magazines</option>
    //     </select>
        // <label htmlFor='book-type'>Book Type</label>
        // <select>
        //   <option value="ebooks">All eBooks</option>
        //   <option value="free-ebooks">Free eBooks</option>
        //   <option value="paid-ebooks">Paid eBooks</option>
        //   <option value="full">Fully Available eBooks</option>
        //   <option value="partial">Partially Available eBooks</option>
        // </select>
    //   </form>
  )
}
