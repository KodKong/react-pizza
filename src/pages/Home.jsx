import React from 'react'
import {Catygories, SortPopup, PizzasBlock} from '../components';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'

const categoryNames = [
  'Мясные', 
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]; 
const sortItems = [
{name :"популярности", type: "popular"},
{name: "цене", type: 'price'}, 
{name: "алфавиту", type: 'alphabet' }]; 


function Home() {
  const dispatch = useDispatch(); 
  const items = useSelector(({pizzas}) => pizzas.items); 

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index)); 
  }, []);
  

    return (
        <div className="container">
        <div className="content__top">
          <Catygories 
          onClickItem={() => onSelectCategory}
           items={categoryNames}></Catygories>
         <SortPopup items={sortItems}>

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
