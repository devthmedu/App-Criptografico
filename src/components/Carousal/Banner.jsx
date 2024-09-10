import { Container, Typography } from '@mui/material'; 
import { styled } from '@mui/system'; 
import React from 'react';
import Carousal from '../Carousal/Carrossel'; 
import './Banner.css'; 


const BannerContainer = styled('div')({
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', 
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
    textAlign: 'center',
    padding: '20px',
});

const BannerContent = styled(Container)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    padding: '0 20px', 
});

const Tagline = styled('div')({
    marginBottom: '20px',
});

const Title = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '4rem', 
    lineHeight: '1.2', 
});

const Subtitle = styled(Typography)({
    color: 'darkgray',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem', 
});

function Banner() {
    return (
        <BannerContainer>
            <BannerContent>
                <Tagline>
                    <Title variant="h2">Cripto</Title>
                    <Subtitle variant="subtitle2">
                        Obtenha todas suas informações favoritas
                    </Subtitle>
                </Tagline>
                <Carousal />
            </BannerContent>
        </BannerContainer>
    );
}

export default Banner;
