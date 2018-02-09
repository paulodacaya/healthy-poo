import React from 'react';
import PropTypes from 'prop-types';

const ResultInfo = props => {   
  const { title, titleColor,
          shapeImagePath, shapeImageAlt, shapeText,
          colorImagePath, colorImageAlt, colorText } = props.info;
  const { smellyPoo, howOften } = props.otherText;

  return (
    <div className="result-info">
      <h4 style={ {color: titleColor} }>{title}</h4>
      <main>
        <img className="radial-border" src={shapeImagePath} alt={shapeImageAlt}/>
        <p>{shapeText}</p>
        <img className="radial-border" src={colorImagePath} alt={colorImageAlt}/>
        <p>{colorText}</p>
      </main>
      <section>
        <h5>More Concerns:</h5>
        <h5>But my poo smells worse than usual...</h5>
        <p>{smellyPoo}</p>
        <h5>Frequency</h5>
        <p>{howOften}</p>
      </section>
      <div className="citation">
        <div className="sources">
          <strong>sources:</strong>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="http://www.redbookmag.com/body/health-fitness/a41099/poop-meaning/">12 Things Your Poop Says About Your Health, Kayla Keegan and Tehrene Firman - Aug 16, 2017</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.shape.com/lifestyle/mind-and-body/what-color-poop-means-black-green-red">What the Color of Your Poop Can Tell You About Your Diet and Health, Moira Lawler - Aug 31, 2017</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.everydayhealth.com/columns/kelly-building-a-crohns-disease-community/the-colors-of-your-poop-and-what-it-means/">The Many Shades of Poop and What They Mean, Agata Blaszczak-Boxe - Feb 22, 2017</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.lifehacker.com.au/2014/03/what-does-the-shape-and-color-of-my-poop-mean/">Ask LH: What Does The Shape And Colour Of My Poop Mean?, Adam Dachis - Mar 5, 2014</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.continence.org.au/pages/bristol-stool-chart.html">7 Textures Of Poop And What They Mean, Team WH</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

ResultInfo.propTypes = {
  info: PropTypes.object.isRequired,
  otherText: PropTypes.object.isRequired,
}

export default ResultInfo;