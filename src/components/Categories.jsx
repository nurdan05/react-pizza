import React from 'react'

const Categories = React.memo(function Categories({ activeCategory , items, onClickItem }) {

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeCategory === null && 'active'} onClick={() => onClickItem(null)}>Все</li>
          {items && items.map((name, index) => (<li className={activeCategory === index && 'active'} onClick={() => onClickItem(index)} key={`${name}_${index}`}>{name}</li>))}
        </ul>
      </div>
    </div>
  )
})
export default Categories;

// import React from 'react'

// const Categories = React.memo(function Categories({ activeCategory , items, onClickItem }) {
//   const [visiblePopup, setVisiblePopup] = React.useState(false); 
//   const toggleVisiblePopup = () => {
//     setVisiblePopup(!visiblePopup)
//   }
//   const onSelectItem = (index) => {
//     if(onClickItem){
//       onClickItem(index);
//     }
//     setVisiblePopup(false)
//   }
//   // const activeLabel = items.find((item) => item.category === activeCategory);
//   const activeCategry = activeCategory == null ? 0 : null
//   const activeLabel = items[activeCategry] 
  
//   // const activeLabel = items.find((item) => item.type === activeSortType).name;
//   console.log(activeCategory)
//   const categoryRef = React.useRef();
//   const handleOusideClick = (e) => {
//     if (!e.path.includes(categoryRef.current)) {
//       setVisiblePopup(false)
//     }
//   }
  
//   React.useEffect(() => {
//     document.body.addEventListener('click', handleOusideClick);
//   }, []);
//   return (
//     <div ref={categoryRef} className="sort">
//     <div className="sort__label">
//       <svg
//         className={visiblePopup ? 'rotated' : ''}
//         width="10"
//         height="6"
//         viewBox="0 0 10 6"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
//           fill="#2C2C2C"
//         />
//       </svg>
//       <b>Сортировка по:</b>
//       <span onClick={toggleVisiblePopup}>{activeLabel}</span>
//     </div>
//     {visiblePopup && <div className="sort__popup">
//       <ul>
//         {items &&
//           items.map((obj, index) => (
//             <li className={activeCategory === obj.type ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${obj.name}_${index}`}>{obj}</li>))}
//       </ul>
//     </div>}
//   </div>
//   )
// })
// export default Categories;

//     // <div>
//     // <li className={activeCategory === null && 'active'} onClick={() => onClickItem(null)}>Все</li>
//     //   <div ref={categoryRef} className="categories">
//     //     <ul>
//     //       <li className={activeCategory === null && 'active'} onClick={() => onClickItem(null)}>Все</li>
//     //       {visiblePopup && <div className="sort__popup"> {items.map((name, index) => (<li className={activeCategory === index && 'active'} onClick={() => onClickItem(index)} key={`${name}_${index}`}>{name}</li>))} </div> }
//     //     </ul>
//     //   </div>
//     // </div>