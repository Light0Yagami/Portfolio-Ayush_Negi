import {React, useState} from 'react'
import './work.css'
import cloud from '../../asset/Cloud.jpeg'
import Flaskapp from '../../asset/Flask-App.jpeg'
import face from '../../asset/face.png'
import parkin from '../../asset/parkin.jpeg'

const Card=({image, title, content})=>{
  return(
    <div class="works_container-card">
      <img src={image} alt="Avatar" className="image"/>
      <div class="works_container-card-overlay">
        <h2>{title}</h2>
        <p className='works_container-card-overlay-content'>{content}</p>
        <p className='works_container-card-overlay-btn'>Read More &gt;</p>
    </div>
    </div>
  )
}

const Work = ()=> {

  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getFilteredCards = () => {
    switch (activeCategory) {
      case 'all':
        return [
          <Card key={1} image={cloud} title="Cloud project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
          <Card key={2} image={Flaskapp} title="Another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
          <Card key={3} image={face} title="Yet another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
          <Card key={4} image={parkin} title="Yet another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
        ];
      case 'cloud':
        return [
          <Card key={1} image={cloud} title="Cloud project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
          <Card key={2} image={Flaskapp} title="Another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,   
        ];

        case 'mlai':
        return [
          <Card key={3} image={face} title="Yet another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
          <Card key={4} image={parkin} title="Yet another project" content="lorem ipsum vnsdkvnjanvav ajknvjkav amkv jka jkv j ajvks kv" />,
        ];
      // Add cases for other categories as needed
      default:
        return [];
    }
  };


    return (
        <div className="works_container" id='projects'>
          <div className="works_container-title">
            <h1>Works</h1>
            <div className="works_container-nav">
            <p><a href='#all' onClick={() => handleCategoryClick('all')} className={activeCategory === 'all' ? 'active' : ''}>All Categories</a></p>
            <p><a href='#cloud' onClick={() => handleCategoryClick('cloud')} className={activeCategory === 'cloud' ? 'active' : ''}>Cloud</a></p>
            <p><a href='#mlai' onClick={() => handleCategoryClick('mlai')} className={activeCategory === 'mlai' ? 'active' : ''}>Ml Ai</a></p>
            <p><a href='#mlai' onClick={() => handleCategoryClick('webdev')} className={activeCategory === 'webdev' ? 'active' : ''}>Web Dev</a></p>

            </div>
            {getFilteredCards()}

            </div>
        </div>

    )
  }

export default Work

