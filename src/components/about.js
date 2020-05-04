import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled('div')`
    min-height: 90vh;
`;


class About extends React.Component{

    render(){
        return(
          <ContentWrapper>
            <div>
                <div>
                    <h4>Welocome! </h4>
                    
                </div>

            </div>
         </ContentWrapper>

        );

    }

}
export default About;