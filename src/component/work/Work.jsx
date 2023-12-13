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
          <Card key={1} image={face} title="Face Mask Detection" content="CNN | Kaggle API | Matplotlib | Sklearn | Numpy | Tensorflow | Keras" />,
          <Card key={2} image={cloud} title="Cloud Monitoring Application" content="Kubernetes | Docker | Python | Boto3 | AWS | ECR | EKR" />,
          <Card key={3} image={parkin} title="Parkinsons Disease Detectioin" content="SVM | NumPy | Pandas | Scikit-learn | Matplotlib | Jupyter Notebook" />,
          <Card key={4} image={Flaskapp} title="Flask App Deployment on AWS" content="AWS | IAM | EC2 | AWS Dynamo DB | AWS S3 | AWS VPC | Load Balancing | Auto Scaling Group " />,
        ];
      case 'cloud':
        return [
          <Card key={2} image={cloud} title="Cloud Monitoring Application" content="Kubernetes | Docker | Python |Boto3 | AWS | ECR | EKR" />,
          <Card key={4} image={Flaskapp} title="Flask App Deployment on AWS" content="AWS | IAM | EC2 | AWS Dynamo DB | AWS S3 | AWS VPC | Load Balancing | Auto Scaling Group" />,   
        ];

        case 'mlai':
        return [
          <Card key={1} image={face} title="Face Mask Detection" content="CNN | Kaggle API | Matplotlib | Sklearn | Numpy | Tensorflow | Keras" />,
          <Card key={3} image={parkin} title="Parkinsons Disease Detectioin" content="SVM | NumPy | Pandas | Scikit-learn | Matplotlib | Jupyter Notebook" />,
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

