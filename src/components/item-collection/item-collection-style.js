import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const ItemCollectionContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
          opacity: 0.8;
        }
        .button{
            opacity: 0.85;
            display: flex;
          }
    }

    @media screen and (max-width: 800px){
        width: 40vw;

        &:hover {
            .image {
              opacity: unset;
            }
            .button{
                opacity: unset;
              }
        }
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const Button = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`
//in the button, we set min-width to unset even in the button style, there is no min-width property, 
//because the Button is a CustomButton, in the CustomButton style, there is min-width of 165px, which is too big for mobile

export const FooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const FooterName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const FooterPrice = styled.span`
    width: 10%;
    text-align: right;
`