// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`
    background: black;
    font-family: Roboto;
    color: white;

    text-align: left;
    line-height: 15px;

    margin: 35px;
    border: 35px;
    padding: 35px;
`

const StyledTitle = styled.div`
    font-size: 36px;
    padding: 50px;
`

const Styledprop = styled.div`
    padding-left: 50px;

`

function Character (props) {

    const { CharacterList } = props;

    return (
        <StyledCharacter>
        {
            CharacterList.map((item) => {
                return (
                    <div>
                        <StyledTitle>{item.name}</StyledTitle>
                        <Styledprop>Height: {item.height}</Styledprop>
                        <Styledprop>Gender: {item.gender}</Styledprop>
                    </div>
                )
            })
        }
        </StyledCharacter>
    )
}

export default Character