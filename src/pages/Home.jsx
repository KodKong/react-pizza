import React from 'react'
import {Catygories, SortPopup, PizzasBlock} from '../components';
import { useSelector } from 'react-redux'
function Home() {
  const {items} = useSelector(({pizzas, filters}) => {
    return {
      items: pizzas.items, 
      sortBy: filters.sortBy
    }
  }); 
    return (
        <div className="container">
        <div className="content__top">
          <Catygories onClickItem={(name) => console.log(name)} items={[
            'Мясные', 
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}></Catygories>
         <SortPopup items={[{name :"популярности", type: "popular"},
          {name: "цене", type: 'price'}, 
          {name: "алфавиту", type: 'alphabet' }]}>

          </SortPopup>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {
          items && items.map((obj) => <PizzasBlock 
          key={obj.id} 
          {...obj}
          />)
        }
        </div>
        </div>
    ); 
}

export default Home
