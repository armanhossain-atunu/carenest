import React from 'react';

const servicesDetailsPage = async ({params}) => {
    const {id} = await params;
    console.log({id});
    return (
        <div>
            <h1>This is Services Details Page</h1>
        </div>
    );
};

export default servicesDetailsPage;