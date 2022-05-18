import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Tops from '../../Tops/Tops';
import ProductImgs from '../../ProductImgs/ProductImgs';


const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Tops></Tops>
            <ProductImgs></ProductImgs>

        </>
    );
};

export default Home;