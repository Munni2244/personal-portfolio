import React from 'react';

const ReactArticle = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>React</h1>
                    <h1>React-Life-Cycle</h1>
                    <p>React  web app are actually  a collection of component. Every react component  has own lifecycle, that are different stage  of component extention.</p>
                    <h5>A react component has four stage of lifecycle. </h5>
                    <h5>For example:</h5>
                </div>
                <div>
                    <h2>Initialization: </h2>
                    <p>It's  a starting point of  stage.Here the component start his journey.  This is the stage where the developer initial state and props .</p>
                    <h6>Its following method is bellow:</h6>
                    <h4>getDefaultProps()  </h4>
                    <p>its used to specify  the default value  of this.props.</p>
                    <h4>getDefaultProps()  </h4>
                    <p>its used to specify  the default value  of this.state.</p>
                </div>
            </div>
        </div>
    );
};

export default ReactArticle;